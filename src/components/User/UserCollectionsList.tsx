import { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionTile from '../Collection/CollectionTile';
import { resetCurrentCollection } from '../../store/reducers/collectionsReducer';
import { useAppSelector } from '../../hooks/redux';
import { ICollection } from '../../types/types';
import { fetchUserInfo } from '../../store/reducers/userReducer';

export default function UserCollectionsList({
  collectionType,
}: {
  collectionType: string;
}) {
  const { id } = useParams();
  const numId = id ? parseInt(id) : undefined;
  const dispatch: any = useDispatch();

  const loggedUserId = useAppSelector((state) => state.user.loggedUser.id);

  const userCollections = useAppSelector(
    (state) => state.user.currentUser.mycollections
  );

  const location = useLocation();

  const userFavoriteCollections = useAppSelector(
    (state) => state.user.loggedUser.myfavoritescollections
  );
  console.log(userFavoriteCollections);

  useEffect(() => {
    numId && dispatch(fetchUserInfo(numId));
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {collectionType === 'created' && userCollections
        ? userCollections.map((collection: ICollection, index) => (
            <Link to={`/collection/${collection.id}`}>
              <CollectionTile key={index} data={collection} userId={numId} />
            </Link>
          ))
        : collectionType === 'created'
        ? 'Pas encore de collection'
        : ''}

      {numId === loggedUserId &&
      collectionType === 'favorite' &&
      userFavoriteCollections &&
      userFavoriteCollections.length > 0
        ? userFavoriteCollections.map((collection: ICollection, index) => (
            <Link to={`/collection/${collection.id}`}>
              <CollectionTile key={index} data={collection} userId={numId} />
            </Link>
          ))
        : collectionType === 'favorite'
        ? 'Pas encore de collection favorite'
        : ''}

      {numId === loggedUserId && collectionType === 'created' && (
        <Link
          to="/collection/new"
          onClick={() => dispatch(resetCurrentCollection())}
        >
          <button className="btn btn-square h-full w-full">
            + Ajouter une collection
          </button>
        </Link>
      )}
    </div>
  );
}

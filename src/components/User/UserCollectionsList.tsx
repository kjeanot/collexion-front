import React, { useEffect } from 'react';
import CollectionTile from '../Collection/CollectionTile';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCurrentCollection } from '../../store/reducers/collectionsReducer';
import { useAppSelector } from '../../hooks/redux';
import { ICollection } from '../../types/types';
import { useParams } from 'react-router-dom';
import { fetchUserInfo } from '../../store/reducers/userReducer';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';

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

  const userFavoriteCollections = useAppSelector(
    (state) => state.user.loggedUser.myfavoritescollections
  );

  useEffect(() => {
    numId && dispatch(fetchUserInfo(numId));
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {collectionType === 'created' && userCollections
        ? userCollections.map((collection: ICollection, index) => (
            <Link to={`/collection/${collection.id}`}><CollectionTile key={index} data={collection} userId={numId}/></Link>
          ))
        : collectionType === 'created'
        ? 'Pas encore de collection'
        : ''}

      {numId === loggedUserId &&
      collectionType === 'favorite' &&
      userFavoriteCollections
        ? userFavoriteCollections.map((collection: ICollection, index) => (
          <Link to={`/collection/${collection.id}`}><CollectionTile key={index} data={collection} userId={numId}/></Link>
          ))
        : collectionType === 'favorite'
        ? 'Pas encore de collection favorite'
        : ''}

      {numId === loggedUserId && collectionType === 'created' &&
        <Link
          to="/collection/new"
          onClick={() => dispatch(resetCurrentCollection())}
        >
          <button className="btn btn-square h-full w-full">
            + Ajouter une collection
          </button>
        </Link>
      }
    </div>
  );
}

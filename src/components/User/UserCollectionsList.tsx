import React from 'react';
import CollectionTile from '../Collection/CollectionTile';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCurrentCollection } from '../../store/reducers/collectionsReducer';
import { useAppSelector } from '../../hooks/redux';
import { ICollection } from '../../types/types';
import { useParams } from 'react-router-dom';

export default function UserCollectionsList() {

  const { id }: any = useParams();

  const dispatch = useDispatch();
  
  const collections = useAppSelector((state) => state.collections.list);

  const userCollections = collections.filter((collection: ICollection) => collection.user?.id === parseInt(id));
  console.log(userCollections);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {userCollections ? userCollections.map((collection: ICollection, index) => (
        <CollectionTile key={index} data={collection}/>
      )) : 'Pas encore de collection'}
      <Link
        to="/collection/new"
        onClick={() => dispatch(resetCurrentCollection())}
      >
        <button className="btn btn-square h-full w-full">
          + Ajouter une collection
        </button>
      </Link>
    </div>
  );
}

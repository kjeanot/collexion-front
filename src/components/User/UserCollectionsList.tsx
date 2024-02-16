import React from 'react';
import CollectionTile from '../Collection/CollectionTile';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCurrentCollection } from '../../store/reducers/collectionsReducer';

export default function UserCollectionsList() {
  const dispatch = useDispatch();
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {[...Array(15)].map((_, index) => (
        <CollectionTile key={index} />
      ))}
      <Link
        to="/collection/new"
        onClick={() => dispatch(resetCurrentCollection())}
      >
        <button className="btn btn-square h-full w-full">
          + Ajouter un objet
        </button>
      </Link>
    </div>
  );
}

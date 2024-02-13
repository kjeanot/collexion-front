import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import CollectionCard from './CollectionCard';
import { ICollection } from '../../types/types';

export default function CollectionsList() {
  const dispatch = useAppDispatch();
  const collectionList = useAppSelector((state) => state.collections.list);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);
  return (
    <>
      <h2 className="text-xl font-bold mb-6">Gallerie des collections</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {collectionList &&
          collectionList.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
      </div>
    </>
  );
}

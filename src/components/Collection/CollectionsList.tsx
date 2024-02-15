import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import CollectionCard from './CollectionCard';
import { ICollection } from '../../types/types';
import { useLoaderData } from 'react-router-dom';

export default function CollectionsList({ collections }: { collections : ICollection[]}) {
  console.log(collections);

  return (
    <>
      <h2 className="text-xl font-bold mb-6">Gallerie des collections</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {collections &&
          collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
      </div>
    </>
  );
}

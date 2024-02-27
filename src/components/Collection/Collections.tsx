import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CollectionsList from './CollectionsList';
import CollectionCTA from './CollectionCTA';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ICollection } from '../../types/types';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import Filter from '../Filter/Filter';
import Background from '../Background/Background';

export default function Collections() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.collections.list);

  return (
    <div className="relative">
      <Background />
      <div>
        <h1 className="md:h-20 p-5 text-center text-2xl font-bold text-white bg-gradient-to-r from-customred to-customorange">
          Collections
        </h1>
      </div>
      <CollectionCTA />
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-customred mt-10 mb-8">
          Gallerie des collections
        </h2>
        <Filter />
      </div>
      {data && <CollectionsList collections={data as ICollection[]} />}
    </div>
  );
}

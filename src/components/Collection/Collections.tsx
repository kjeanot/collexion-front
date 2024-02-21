import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CollectionsList from './CollectionsList';
import CollectionCTA from './CollectionCTA';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ICollection } from '../../types/types';
import { fetchCollections } from '../../store/reducers/collectionsReducer';

export default function Collections() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.collections.list);



  console.log(data);
  return (
    <>
      <CollectionCTA />
      {data && <CollectionsList collections={data as ICollection[]} />}
    </>
  );
}

import React from 'react';
import CollectionsList from './CollectionsList';
import CollectionCTA from './CollectionCTA';
import { useAppSelector } from '../../hooks/redux';
import { useLoaderData } from 'react-router-dom';
import { ICollection } from '../../types/types';

export default function Collections() {
  const { data } = useLoaderData() as { data?: ICollection[] };

  console.log(data);
  return (
    <>
      <CollectionCTA />
      {data && <CollectionsList collections={data as ICollection[]} />}
    </>
  );
}

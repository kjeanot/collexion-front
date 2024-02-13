import React from 'react';
import CollectionsList from './CollectionsList';
import CollectionCTA from './CollectionCTA';
import { useAppSelector } from '../../hooks/redux';

export default function Collections() {
  const token = useAppSelector((state) => state.user.token);
  console.log(token);
  return (
    <>
      <CollectionCTA />
      <CollectionsList />
    </>
  );
}

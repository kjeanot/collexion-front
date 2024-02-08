import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collections';
import Card from './Card';
import { Collection } from '../../types/types';

export default function CollectionsList({ data }: { data: Collection[] }) {
  return (
    <>
    <h2>Gallerie des collections</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
    {data && (
      data.map((collection) => (
        <Card key={collection.id} collection={collection} />
      ))
    )};
    </div>
    </>
  );
}

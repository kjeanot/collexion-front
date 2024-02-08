import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCollections } from '../../store/reducers/collections';
import Card from './Card';
import { Collection } from '../../types/types';

export default function CollectionsList({ data }: { data: Collection[] }) {
  return (
    <>
    <h2>Gallerie des collections</h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
    {data && (
      data.map((collection) => (
        <Card key={collection.id} collection={collection} />
      ))
    )}
    </div>
    </>
  );
}

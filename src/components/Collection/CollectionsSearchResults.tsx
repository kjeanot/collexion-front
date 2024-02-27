import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CollectionsList from './CollectionsList';
import CollectionCTA from './CollectionCTA';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { ICollection } from '../../types/types';
import { fetchCollections } from '../../store/reducers/collectionsReducer';

export default function CollectionsSearchResults() {

  const data = useAppSelector((state) => state.collections.list);

  const { search } = useParams();

  const filteredCollections = search && data.filter((collection) => collection.name?.includes(search));

  
  return (
    <>
      <hgroup className="mb-6">
        <h1 className="font-bold text-3xl text-customred mt-10 inline-block">Les collections correspondant à votre recherche :</h1>
        <p className="inline-block ml-3 font-bold text-lg">{search}</p>
      </hgroup>
      {filteredCollections && <CollectionsList collections={filteredCollections as ICollection[]} />}
    </>
  );
}

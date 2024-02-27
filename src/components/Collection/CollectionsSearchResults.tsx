import { useParams } from 'react-router-dom';
import CollectionsList from './CollectionsList';
import { ICollection } from '../../types/types';
import { useAppSelector } from '../../hooks/redux';

export default function CollectionsSearchResults() {
  const data = useAppSelector((state) => state.collections.list);

  const { search } = useParams();

  const filteredCollections =
    search && data.filter((collection) => collection.name?.includes(search));

  return (
    <>
      <hgroup className="mb-6">
        <h1 className="font-bold text-3xl text-customred mt-10 inline-block">
          Les collections correspondant à votre recherche :
        </h1>
        <p className="inline-block ml-3 font-bold text-lg">{search}</p>
      </hgroup>
      {filteredCollections && (
        <CollectionsList collections={filteredCollections as ICollection[]} />
      )}
    </>
  );
}

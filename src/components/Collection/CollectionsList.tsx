import CollectionCard from './CollectionCard';
import { ICollection } from '../../types/types';
import Filter from '../Filter/Filter';

export default function CollectionsList({
  collections,
}: {
  collections: ICollection[];
}) {
  console.log(collections);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-customred mt-10 mb-8">
          Gallerie des collections
        </h2>
        <Filter />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {collections &&
          collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
      </div>
    </>
  );
}

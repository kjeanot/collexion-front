import CollectionCard from './CollectionCard';
import { ICollection } from '../../types/types';

export default function CollectionsList({
  collections,
}: {
  collections: ICollection[];
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
      {collections &&
        collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
    </div>
  );
}

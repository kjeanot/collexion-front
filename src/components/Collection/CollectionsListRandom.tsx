import { useLoaderData } from 'react-router-dom';
import CollectionsList from './CollectionsList';
import Background from '../Background/Background';

export default function CollectionsListRandom() {
  const loaderRandomCollection = useLoaderData() as Awaited<
    ReturnType<typeof Object>
  >;

  return (
    <>
      <Background />
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl text-customred mt-10 mb-8">
          Collections au hasard
        </h2>
      </div>
      <CollectionsList collections={loaderRandomCollection.data} />
    </>
  );
}

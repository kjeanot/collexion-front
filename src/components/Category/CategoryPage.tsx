import React from 'react';

import { useLoaderData } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

export default function CategoryPage() {

  const { data } = useLoaderData() as Awaited<ReturnType<typeof Object>>;
  console.log(data);

  const objects = useAppSelector((state) => state.objects.list);
  console.log(objects);

  // const relatedCollections = collections.filter((collection) => { collection. === data.id });

  return (
    <div>CategoryPage</div>
  )
}

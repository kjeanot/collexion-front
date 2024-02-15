import React from 'react';
import CollectionTile from '../Collection/CollectionTile';

export default function UserCollectionsList() {
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      {[...Array(15)].map((_, index) => (
        <CollectionTile />
      ))}
    </div>
  );
}

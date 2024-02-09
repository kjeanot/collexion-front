import React from 'react';
import Avatar from '../Avatar/Avatar';
import Rating from '../Rating/Rating';
import { ICollection } from '../../types/types';

type Props = {};

export default function CollectionCard({
  collection,
}: {
  collection: ICollection;
}) {
  return (
    <a href="#" className="card bg-base-100 shadow-xl hover:bg-gray-100">
      <figure>
        <img src={collection.image} alt={collection.name} />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-customred">{collection.name}</h3>
        <Rating rating={collection.rating} />
        <Avatar picture={collection.user.picture} nickname={collection.user.nickname} />
        <p className="line-clamp-5">{collection.description}</p>
      </div>
    </a>
  );
}

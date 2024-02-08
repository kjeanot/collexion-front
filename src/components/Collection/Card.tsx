import React from 'react';
import avatar from '../../assets/avatar-generations_bssq.jpg';
import { Collection } from '../../types/types';

type Props = {};

export default function Card({ collection }: {collection : Collection}) {
  return (
      <a
        href="#"
        className="block bg-white border border-gray-200 shadow hover:bg-gray-100 p-4"
      >
        <img src={collection.image} alt="" />
        <h5 className="mb-2 ml-2 mt-2 text-2xl font-bold tracking-tight text-customred">
          {collection.name}
        </h5>
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 ml-2 rounded-full" src={avatar} alt="" />
          <div className="font-medium  text-gray-500">
            <div>Jese Leos</div>
          </div>
        </div>

        <p className="font-normal py-3 px-1 text-center text-gray-700">
          {collection.description}
        </p>
      </a>
  );
}

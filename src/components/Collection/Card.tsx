import React from 'react';
import avatar from '../../assets/avatar-generations_bssq.jpg';
import { ICollection } from '../../types/types';

type Props = {};

export default function Card({ collection }: { collection: ICollection }) {
  return (
    <a href="#" className="card bg-base-100 shadow-xl hover:bg-gray-100">
      <figure>
        <img src={collection.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-customred">{collection.name}</h2>
        <div className="h-fit flex">
          {
            // Adding stars depending on the collection rating value
            collection.rating > 0 ? (
              // Creating an array from the collection rating value to be able to map it and generate stars
              [...Array(collection.rating)].map((_, index) => (
                <svg
                  key={index}
                  className="w-3 h-3 text-customorange"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              ))
            ) : (
              <p className="text-gray-400">Pas encore notée</p>
            )
          }
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 ml-2 rounded-full"
            src={
              collection.user.picture
                ? collection.user.picture
                : 'https://via.placeholder.com/150'
            }
            alt=""
          />
          <div className="font-medium  text-gray-500">
            <div>{collection.user.nickname}</div>
          </div>
        </div>
        <p className="line-clamp-5">{collection.description}</p>
      </div>
    </a>
  );
}

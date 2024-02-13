import React, { useEffect } from 'react';
import Avatar from '../Avatar/Avatar';
import Rating from '../Rating/Rating';
import ObjectCard from '../Object/ObjectCard';
import { ICollection } from '../../types/types';
import { useLoaderData, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { findCollection } from '../../store/selectors/collections';
import { fetchSingleCollection } from '../../store/reducers/collectionsReducer';

export default function SingleCollection() {
  // Using useParams() to retrieve the collection id, passed by the router params
  const params = useParams();
  const dispatch = useAppDispatch();
  const { data }: any = useLoaderData();
  console.log(data);

  return (
    <>
      <header className="flex flex-wrap border border-b-2 mb-6">
        <img src={data.image} className="w-full md:w-1/3 object-cover" />
        <div className="w-full md:w-2/3 p-6">
          <div className="flex justify-end">
            <button className="btn btn-circle mr-4">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                  clip-rule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="btn btn-circle">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <h1 className="my-5 text-2xl font-bold">{data.name}</h1>
          <div className="flex flex-wrap justify-between content-center">
            <Avatar nickname={data.user.nickname} />
            <Rating value={data.rating} />
          </div>
          <section className="my-5">
            <h2 className="text-xl">Description</h2>
            <p>{data.description}</p>
          </section>
        </div>
      </header>
      <h2 className="text-xl mb-6">Objets de cette collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.myobjects.map((object: ICollection) => (
          <ObjectCard id={object.id} name={object.name} image={object.image} />
        ))}
        <button className="btn btn-square h-full w-full">
          + Ajouter un objet
        </button>
      </div>
    </>
  );
}

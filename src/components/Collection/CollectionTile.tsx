import React, { useEffect, useState } from 'react';
import { ICollection } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useLocation } from 'react-router-dom';
import {
  fetchUserInfo,
  removeFromFavorites,
} from '../../store/reducers/userReducer';

export default function CollectionTile({
  data,
  userId,
}: {
  data: ICollection;
  userId?: number;
}) {
  const loggedUserId = useAppSelector((state) => state.user.loggedUser.id);

  const dispatch = useAppDispatch();

  const location = useLocation();

  return (
    <article className="card h-fit md:h-60 sm:card-side bg-base-100 shadow-lg flex-col md:flex-row">
      <figure className="h-full md:h-60 md:w-60 w-full flex-none">
        {data.image && <img src={data.image as string} alt={data.name} className="object-cover h-full" />}
      </figure>
      <div className="card-body pt-2 pr-2 justify-center">
        <div className="flex justify-end mb-2">
          {
            // Checks if the current user page is the logged user's page to show edit buttons
            location.pathname !== `/user/${userId}/favorites` &&
              userId &&
              userId === loggedUserId && (
                <>
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
                        clipRule="evenodd"
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
                </>
              )
          }
          {location.pathname === `/user/${userId}/favorites` && (
            <button
              className="btn btn-circle ml-4"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeFromFavorites(data.id as number));
                dispatch(fetchUserInfo(loggedUserId as number));
              }}
            >
              <svg
                className="w-6 h-6 text-customred"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
              </svg>
            </button>
          )}
        </div>

        <h3 className="card-title pr-4">{data.name}</h3>
        <p className="line-clamp-3 pr-4">{data.description}</p>
      </div>
    </article>
  );
}

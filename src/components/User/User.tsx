import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function User() {
  return (
    <>
      <section>
        <div className="flex flex-col mx-auto place-items-center md:flex-row mb-6">
          <div className="avatar md:mr-6 w-32">
            <div className="w-fit rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <hgroup className="text-center md:text-left flex-1">
            <h1 className="text-3xl">Jeanne_17</h1>
            <p>Membre depuis 2024</p>
          </hgroup>
          <div className="my-4 md:m-0">
            <button
              className="btn btn-circle mr-4"
              onClick={() => dispatch(switchModalDisplay())}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.5 3A3.5 3.5 0 0 0 14 7L8.1 9.8A3.5 3.5 0 0 0 2 12a3.5 3.5 0 0 0 6.1 2.3l6 2.7-.1.5a3.5 3.5 0 1 0 1-2.3l-6-2.7a3.5 3.5 0 0 0 0-1L15 9a3.5 3.5 0 0 0 6-2.4c0-2-1.6-3.5-3.5-3.5Z" />
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
          </div>
        </div>
        <h2 className="text-xl">Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          tempora incidunt odit ex nisi tenetur neque qui aspernatur, illo
          molestiae sint, dolorum pariatur laboriosam quaerat. Ipsa adipisci
          maiores tempora officiis!
        </p>
      </section>
      <div role="tablist" className="tabs tabs-bordered flex divide-y border-b-2">
        <NavLink
          to="/user/2"
          end
          role="tab"
          className={({ isActive, isPending }) =>
            isPending ? 'bg-gray-100 w-60 p-2' : isActive ? 'bg-gray-300 w-60 p-2' : 'bg-gray-100 w-60 p-2'
          }
        >
          <h3>Collections créées</h3>
        </NavLink>
        <NavLink
          to="/user/2/favorites"
          role="tab"
          className={({ isActive, isPending }) =>
            isPending ? 'bg-gray-100 w-60 p-2' : isActive ? 'bg-gray-300 w-60 p-2' : 'bg-gray-100 w-60 p-2'
          }
        >
          <h3>Collections favorites</h3>
        </NavLink>
        
      </div>
      <Outlet />
    </>
  );
}

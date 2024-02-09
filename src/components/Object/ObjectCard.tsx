import React from 'react';
import { IObject } from '../../types/types';
import { Link } from 'react-router-dom';

export default function ObjectCard({ id, name, image } : IObject) {
  return (
    <>
    <Link to={`/object/${id}`}>
      <div className="card h-62 max-w-full bg-base-100 shadow hover:contrast-50">
        <figure>
          <img
            className=""
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h3 className="justify-center line-clamp-3">Montre Seiko Presage </h3>
        </div>
      </div>
    </ Link>
    </>
  );
}

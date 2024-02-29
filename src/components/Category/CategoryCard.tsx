import React from 'react'
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;

}

export default function CategoryCard({id, name, image}: CategoryCardProps) {
  return (
    <Link to={`/category/${id}`}>
      <div className="card h-62 max-w-full bg-base-100 shadow hover:bg-gray-100 rounded-none rounded-tr-3xl rounded-bl-3xl">
        <figure>
          <img
            className="object-cover h-44 w-full"
            src={image as string}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h3 className="justify-center">{name}</h3>
        </div>
      </div>
    </Link>
  )
}

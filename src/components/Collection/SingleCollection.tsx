import React from 'react';
import Avatar from '../Avatar/Avatar';
import Rating from '../Rating/Rating';
import { ICollection } from '../../types/types';
import { useParams } from 'react-router-dom';

export default function SingleCollection() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <header className="flex flex-wrap border border-b-2 mb-6">
        <img
          src="https://via.placeholder.com/1500"
          className="w-full md:w-1/3 object-cover"
        />
        <div className="w-full md:w-2/3 p-6">
          <h1 className="my-5 text-2xl font-bold">
            Collections de pleins de trucs que j'ai ramassé durant toute ma vie
            ! {params.id}
          </h1>
          <div className="flex flex-wrap justify-between content-center">
            <Avatar picture="t" nickname="prout" />
            <Rating value={3} />
          </div>
          <section className="my-5">
            <h2 className="text-xl">Description</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              dolore in dolores asperiores saepe corrupti neque quam ratione
              necessitatibus consequuntur vel ut eius, perferendis quae alias.
              Eos illum necessitatibus molestias?
            </p>
            <p>
              Consequatur quisquam repellendus quam quasi molestiae pariatur,
              esse atque tenetur quaerat aperiam obcaecati aspernatur tempore,
              at dolor impedit quibusdam natus expedita. Eligendi, ex quaerat.
              Quisquam eaque nesciunt beatae placeat enim!
            </p>
            <p>
              Illo eaque at praesentium magnam odio! Fugit ullam dignissimos
              modi perspiciatis iure, id tenetur accusamus. Pariatur
              reprehenderit porro cum veritatis, aut autem minima, dolores
              obcaecati, quae perspiciatis labore modi laborum?
            </p>
          </section>
        </div>
      </header>
      <h2 className="text-xl mb-6">Objets de cette collection</h2>
    </>
  );
}

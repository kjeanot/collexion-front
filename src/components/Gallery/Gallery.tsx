import React from 'react';

type Props = {};

export default function Gallery({}: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <a href="">
        <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
          <figure>
            <img
              className=""
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Category x</h2>
          </div>
        </div>
      </a>

      <a href="">
        <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Category x</h2>
          </div>
        </div>
      </a>

      <a href="">
        <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Category x</h2>
          </div>
        </div>
      </a>

      <a href="">
        <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Category x</h2>
          </div>
        </div>
      </a>

      <a href="">
        <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Category x</h2>
          </div>
        </div>
      </a>

      <a href="">
        <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Category x</h2>
          </div>
        </div>
      </a>
    </div>
  );
}

import React from 'react';

type Props = {};

export default function Button({}: Props) {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 text-center me-2 mb-2"
      >
        Toutes les collections
      </button>
    </div>
  );
}

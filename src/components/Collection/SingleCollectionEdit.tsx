import React from 'react';

export default function SingleCollectionEdit() {
  return (
    <form className="md:w-1/2 mx-auto">
      <h1>Editer la collection</h1>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Nom de la collection</span>
        </div>
        <input
          type="text"
          placeholder="Nom de la collection"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Description de la collection</span>
        </div>
        <textarea className="textarea textarea-bordered h-24" placeholder="Decription"></textarea>
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Description de la collection</span>
        </div>
        <input type="file" className="file-input file-input-bordered file-input-neutral w-full" />
      </label>
    </form>
  );
}

import React from 'react';

type Props = {};

export default function Subscribe({}: Props) {
  return (
    <div className="my-8">
      <p className="text-xl font-medium uppercase text-customred">
        Comme vous, d'autres personnes ont la passion de la collection. Pourquoi
        ne pas les rejoindre ?!
      </p>
      {/* border */}
      <div className="border mt-6" />
      {/* form */}
      <div className="mt-6">
      <label className="form-control w-full max-w-xs" htmlFor="user-nickname">
          <div className="label">
            <span className="label-text">Pseudo</span>
          </div>
          <input
            id="user-email"
            type="text"
            placeholder="email@gmail.com"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="user-email">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            id="user-email"
            type="text"
            placeholder="email@gmail.com"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <label className="form-control w-full max-w-xs" htmlFor="user-password">
          <div className="label">
            <span className="label-text">Mot de passe</span>
          </div>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <p className="text-sm ml-1 mt-6">
          Pour continuer, veuillez accepter nos{' '}
          <a className="link">Mentions légales & CGU</a>.
        </p>
        <label className="label justify-start cursor-pointer mt-4">
          <span className="label-text">J'accepte les termes</span>
          <input type="checkbox" checked className="checkbox ml-2" />
        </label>
      </div>
    </div>
  );
}

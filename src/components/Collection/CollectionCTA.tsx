import React from 'react';
import Button from '../Button/Button';

export default function CollectionCTA() {
  return (
    <div
      className="hero min-h-fit"
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content p-8">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Créez vos propres collections !
          </h1>
          <p className="mb-5">
            Vous avez également des objets de collection dont vous êtes fier(e)
            ? Publiez-la sur Collexion pour enchanter toute la communauté de
            collectionneurs en quête d'inspiration !
          </p>
          {<Button text={'Je crée ma collection !'} />}
        </div>
      </div>
    </div>
  );
}

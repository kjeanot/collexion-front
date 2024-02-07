import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2 lg:w-2/5">
              <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                Collexion
              </span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates voluptate eum earum atque odit illum ratione perferendis porro cum. Optio in neque tempora corporis minus delectus dolorum, molestiae saepe?</p>
          </div>
          <div className="lg:grid lg:grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 lg:w-3/5 md:w-1/2 ">
            <div className="mb-4">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
                  <a href="https://flowbite.com/" className="hover:underline mb-4">
                    contact@collexion.fr
                  </a>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Trouver l'inspiration
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Catégories
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Collections
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Une collection au hasard
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Un objet au hasard
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                A Propos
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Mon profil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Mentions légales &amp; CGU
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 - 
            <a href="https://flowbite.com/" className="hover:underline">
              Collexion
            </a>
            . Tous droits réservés
          </span>
        </div>
      </div>
    </footer>
  );
}

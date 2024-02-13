import React from 'react';

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-6">
  <aside className="md:max-w-80">
    
    <h3>Collexion</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, delectus nam aspernatur veniam distinctio perferendis optio, nemo accusamus voluptas deleniti dignissimos at quaerat magnam omnis doloribus reprehenderit, alias voluptates rerum!</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Contact</h6> 
    <a className="link link-hover">contact@collexion.fr</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Trouver l'inspiration</h6> 
    <a className="link link-hover">Catégories</a>
    <a className="link link-hover">Collections</a>
    <a className="link link-hover">Collection au hasard</a>
    <a className="link link-hover">Objet au hasard</a>
  </nav> 
  <nav>
    <h6 className="footer-title">à propos</h6> 
    <a className="link link-hover">Mon profil</a>
    <a className="link link-hover">Mentions légales & CGU</a>
  </nav>
</footer>

  );
}

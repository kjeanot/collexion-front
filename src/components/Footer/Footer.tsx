import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

export default function Footer() {
  const userId = useAppSelector((state) => state.user.loggedUser.id);
  const userRole = useAppSelector((state) => state.user.loggedUser.roles);

  return (
    <footer className="footer relative p-10 bg-base-200 text-base-content mt-6">
      <aside className="md:max-w-80">
        <h3 className="footer-title">Collexion</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, delectus
          nam aspernatur veniam distinctio perferendis optio, nemo accusamus
          voluptas deleniti dignissimos at quaerat magnam omnis doloribus
          reprehenderit, alias voluptates rerum!
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">contact@collexion.fr</a>
      </nav>
      <nav>
        <h6 className="footer-title">Trouver l'inspiration</h6>
        <NavLink className="link link-hover" to={'/Categories'}>
          Catégories
        </NavLink>
        <NavLink className="link link-hover" to={'/collections'}>
          Collections
        </NavLink>
        <NavLink className="link link-hover" to={'/collection/random'}>
          Collections au hasard
        </NavLink>
        <NavLink className="link link-hover" to={'/objet/random'}>
          Objets au hasard
        </NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">à propos</h6>
        {userId && (
          <NavLink className="link link-hover" to={`/user/${userId}`}>
            Mon profil
          </NavLink>
        )}
        <NavLink className="link link-hover" to={'/mentions'}>
          Mentions légales & CGU
        </NavLink>
        {userRole?.includes('ROLE_ADMIN') && 
          <NavLink className="btn btn-neutral" to="https://www.apicollexion.live/back/main">
            Accès admin
          </NavLink>
        }
      </nav>
    </footer>
  );
}

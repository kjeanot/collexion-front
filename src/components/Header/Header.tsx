import Login from '../Login/Login';
import logo from '../../assets/logo-collexion.png';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { switchLoginDisplay } from '../../store/reducers/appReducer';
import store from '../../store';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const dispatch = useAppDispatch();
  const showLogin = useAppSelector((state) => state.app.showLogin);
  return (
    <>
      <nav className="navbar bg-base-100">
        <a
          href="#"
          className="flex flex-wrap items-center space-x-3 rtl:space-x-reverse w-1/5 "
        >
          <img
            src={logo}
            className="h-32 object-contain"
            alt="Collexion logo"
          />
        </a>
        <div className="flex w-4/5">
          <ul className="flex grow menu menu-horizontal px-1 z-50">
            <li>
              <details>
                <summary>Catégories</summary>
                <ul className="p-2 bg-base-100 rounded-t-none min-w-56">
                  <li>
                    <a>Figurines</a>
                  </li>
                  <li>
                    <a>Jeux-vidéos</a>
                  </li>
                  <li>
                    <a>Montres</a>
                  </li>
                  <li>
                    <a>Véhicules</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <li>
          <NavLink to={'/collections'}>Collections</NavLink>
          </li>
          <li className="flex flex-none">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </li>
          <li className="flex flex-none content-center">
            <div
              className="flex content-center py-2 md:px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              onClick={() => dispatch(switchLoginDisplay())}
            >
              <svg
                className="md:mr-2 w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="hidden md:inline-block">Se connecter</span>
            </div>
          </li>
        </div>
      </nav>
      {showLogin && <Login />}
    </>
  );
}

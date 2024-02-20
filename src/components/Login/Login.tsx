import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { switchLoginDisplay } from '../../store/reducers/appReducer';
import {
  loginCheck,
  setEmail,
  setPassword,
} from '../../store/reducers/userReducer';

export default function Login() {
  const dispatch = useAppDispatch();

  return (
    <div
      id="authentication-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="backdrop-blur-sm bg-black/50 overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0"
    >
      <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 ">
              Connectez-vous à Collexion
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="authentication-modal"
              onClick={() => dispatch(switchLoginDisplay())}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Fermer</span>
            </button>
          </div>

          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  placeholder="email@gmail.com"
                  required
                  onChange={(evt) => {
                    dispatch(setEmail(evt.currentTarget.value));
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  required
                  onChange={(evt) => {
                    dispatch(setPassword(evt.currentTarget.value));
                  }}
                />
              </div>
              <div>
                <a href="#" className="text-sm text-customred hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
              <button
                className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 text-center me-2 mb-2"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(loginCheck());
                  dispatch(switchLoginDisplay());
                }}
              >
                Se connecter
              </button>
              <div className="text-sm font-medium text-gray-500">
                Pas encore enregistré ?{' '}
                <Link
                  to="/subscribe"
                  className="text-customred hover:underline"
                  onClick={() => dispatch(switchLoginDisplay())}
                >
                  Créer votre compte
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

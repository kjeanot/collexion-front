import { useAppDispatch } from '../../hooks/redux';
import {
  register,
  setEmail,
  setNickname,
  setPassword,
} from '../../store/reducers/userReducer';

export default function Subscribe() {
  const dispatch = useAppDispatch();

  return (
    <div className="my-8">
      <p className="text-xl font-medium uppercase text-customred">
        Comme vous, d'autres personnes ont la passion de la collection. Pourquoi
        ne pas les rejoindre ?!
      </p>
      {/* border */}
      <div className="border mt-6" />
      {/* form */}
      <form className="mt-6" action="">
        <label className="form-control w-full max-w-xs" htmlFor="user-nickname">
          <div className="label">
            <span className="label-text">Pseudo</span>
          </div>
          <input
            id="user-nickname"
            type="text"
            placeholder="pseudo"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(evt) => dispatch(setNickname(evt.currentTarget.value))}
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
            onChange={(evt) => dispatch(setEmail(evt.currentTarget.value))}
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
            onChange={(evt) => dispatch(setPassword(evt.currentTarget.value))}
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
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 text-center me-2 mb-2"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(register());
          }}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}

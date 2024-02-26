import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { resetCurrentCollection } from '../../store/reducers/collectionsReducer';
import { switchLoginDisplay } from '../../store/reducers/appReducer';

export default function CollectionCTA() {

  const dispatch = useAppDispatch();
  const loggedUserId = useAppSelector((state) => state.user.loggedUser.id);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div
        className="hero min-h-fit my-6"
        style={{
          backgroundImage:
            'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content p-8">
          <div className="max-w-md">
            <h2 className="mb-5 text-3xl font-bold">
              Créez vos propres collections !
            </h2>
            <p className="mb-5">
              Vous avez également des objets de collection dont vous êtes
              fier(e) ? Publiez-la sur Collexion pour enchanter toute la
              communauté de collectionneurs en quête d'inspiration !
            </p>
            <Link to={loggedUserId ? "/collection/new" : "/subscribe"} onClick={(evt) => { 
              evt.preventDefault();
              dispatch(resetCurrentCollection());
              loggedUserId ? navigate("/collection/new") : dispatch(switchLoginDisplay());
              }}>
              <Button text={'Je crée ma collection !'}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

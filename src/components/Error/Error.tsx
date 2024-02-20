import { Link } from 'react-router-dom';
import Button from '../Button/Button';

export default function Error() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-bold">404</h1>
            <span className="loading loading-dots loading-lg mt-6" />
            <p className="py-6 text-2xl font-semibold">
              Oops ! Cette page est introuvable.
            </p>
            <div className="mt-6">
              <Link to="/">
                <Button
                  text={'Cliqué ici pour retrouver les collections perdue'}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

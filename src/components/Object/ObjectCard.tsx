import { Link } from 'react-router-dom';
import { IObject } from '../../types/types';

export default function ObjectCard({ id, name, image }: IObject) {
  return (
    <Link to={`/object/${id}`}>
      <div className="card h-62 max-w-full bg-base-100 shadow hover:contrast-50">
        <figure>
          <img className="object-cover h-44 w-full" src={image as string} alt={name} />
        </figure>
        <div className="card-body">
          <h3 className="justify-center line-clamp-1">{name}</h3>
        </div>
      </div>
    </Link>
  );
}

import { Link } from 'react-router-dom';
import { IObject } from '../../types/types';

export default function GalleryObjects({ objects }: { objects: IObject[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {objects.map((object) => (
        <Link key={object.id} to={`/object/${object.id}`}>
          <div className="card h-80 max-w-full bg-base-100 shadow hover:contrast-50">
            <figure>
              <img
                className="object-cover w-full"
                src={object.image}
                alt={object.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title justify-center">{object.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ICategory } from '../../types/types';

export default function GalleryObjects({ objects }: { objects: ICategory[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {objects.map((object) => (
        <Link key={object.id} to={`/category/${object.id}`}>
          <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
            <figure>
              <img className="" src={object.image} alt="Shoes" />
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

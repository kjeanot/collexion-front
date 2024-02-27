import { Link } from 'react-router-dom';
import { ICategory } from '../../types/types';

export default function GalleryCategories({
  categories,
}: {
  categories: ICategory[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`}>
          <div className="card h-80 max-w-full bg-base-100 shadow hover:bg-gray-100 rounded-none rounded-tr-3xl rounded-bl-3xl">
            <figure>
              <img
                className="object-cover w-full"
                src={category.image}
                alt={category.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title justify-center">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

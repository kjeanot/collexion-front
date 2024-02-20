import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import Rating from '../Rating/Rating';
import { ICollection } from '../../types/types';

export default function CollectionCard({
  collection,
}: {
  collection: ICollection;
}) {
  return (
    <Link
      to={`/collection/${collection.id}`}
      className="card bg-base-100 shadow-xl hover:bg-gray-100"
    >
      <figure className="h-64">
        <img
          src={collection.image}
          alt={collection.name}
          className="object-cover h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-customred">{collection.name}</h3>
        <Rating value={collection.rating} />
        {collection.user && (
          <Avatar
            picture={collection.user.picture}
            nickname={collection.user.nickname}
          />
        )}
        <p className="line-clamp-5">{collection.description}</p>
      </div>
    </Link>
  );
}

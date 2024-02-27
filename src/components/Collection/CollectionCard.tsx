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
      className="card bg-base-100 shadow-xl hover:bg-gray-100 rounded-none rounded-tr-3xl rounded-bl-3xl"
    >
      <figure className="h-64">
        <img
          src={collection.image ? collection.image as string : 'https://picsum.photos/1200'}
          alt={collection.name}
          className="object-cover h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-customred">{collection.name}</h3>
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

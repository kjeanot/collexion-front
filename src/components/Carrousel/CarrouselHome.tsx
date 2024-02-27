import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { ICollection } from '../../types/types';
import Rating from '../Rating/Rating';
import Avatar from '../Avatar/Avatar';

export default function Carrousel({
  collections,
}: {
  collections: ICollection[];
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  return (
    <Carousel
      responsive={responsive}
      partialVisible={true}
      infinite
      autoPlay
      showDots
      keyBoardControl
      autoPlaySpeed={2000}
      customTransition="all 1"
      transitionDuration={500}
      containerClass="carousel-container my-2 mb-6"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="md:invisible custom-dot-list-style opacity-70 "
      itemClass="carousel-item-padding-40-px p-2 pb-2 my-4"
    >
      {collections.map((collection) => (
        <div key={collection.id}>
          <Link
            to={`/collection/${collection.id}`}
            className="card bg-base-100 shadow hover:bg-gray-100 rounded-none rounded-tr-3xl rounded-bl-3xl"
          >
            <figure>
              <img
                className="object-cover h-72 w-full"
                src={collection.image ? collection.image as string : 'https://picsum.photos/1200'}
                alt={collection.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title line-clamp-1 text-customred">
                {collection.name}
              </h3>
              {/* <Rating value={collection.rating} /> */}
              <Avatar
                picture={collection.user?.picture}
                nickname={collection.user?.nickname}
              />
              <div className="h-28">
                <p className="line-clamp-5">{collection.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}

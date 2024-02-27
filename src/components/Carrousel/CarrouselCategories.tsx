import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ICategory } from '../../types/types';

export default function CarrouselCategories({
  categories,
}: {
  categories: ICategory[];
}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite
      autoPlay
      showDots
      keyBoardControl
      autoPlaySpeed={2000}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container my-2"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="md:invisible custom-dot-list-style opacity-70"
      itemClass="carousel-item-padding-40-px p-2 pb-2 my-4"
    >
      {categories.map((category) => (
        <div key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="card h-80 bg-base-100 shadow hover:bg-gray-100"
          >
            <figure>
              <img
                className="object-cover h-72 w-full"
                src={category.image}
                alt={category.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-center line-clamp-1">
                {category.name}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}

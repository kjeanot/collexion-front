import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import banner from '../../assets/5da946d6-avatar-date-de-sortie-histoire-casting-images-tout-savoir-sur-la-serie-live-action-de-netflix.jpg';

export default function Carrousel() {
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
      <div>
        <a href="">
          <div className="card h-80 bg-base-100 shadow hover:contrast-50">
            <figure>
              <img
                className=""
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Category x</h2>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div className="card h-80 bg-base-100 shadow hover:contrast-50">
            <figure>
              <img
                className=""
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Category x</h2>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div className="card h-80 bg-base-100 shadow hover:contrast-50">
            <figure>
              <img className="" src={banner} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Category x</h2>
            </div>
          </div>
        </a>
      </div>
      <div>
        <a href="">
          <div className="card bg-base-100 shadow hover:contrast-50">
            <figure>
              <img
                className=""
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Category x</h2>
            </div>
          </div>
        </a>
      </div>
    </Carousel>
  );
}

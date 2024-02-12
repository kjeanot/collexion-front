// Component DaisyUI

export default function Carrousel() {
  return (
    <div>
      <div className="carousel w-full mt-6 pb-6">
        {/* slide 1 */}
        <div
          id="slide1"
          className="carousel-item relative w-full grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {/* card 1 */}
          <a href="">
            <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
              <figure className="h-56 overflow-hidden">
                <img
                  className="object-fill"
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Category x</h2>
              </div>
            </div>
          </a>
          {/* card 2 */}
          <a href="">
            <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
              <figure className="h-56 overflow-hidden">
                <img
                  className="object-fill"
                  src="https://blog.info-brocantes.com/wp-content/uploads/iStock-168432580-1-1.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Category x</h2>
              </div>
            </div>
          </a>
          {/* card 3 */}
          <a href="">
            <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
              <figure className="h-56 overflow-hidden">
                <img
                  className="object-cover"
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Category x</h2>
              </div>
            </div>
          </a>
          {/* button */}
          <div className="absolute flex justify-end transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide2" className="btn">
              ❯
            </a>
          </div>
        </div>

        {/* slide 2 */}
        <div
          id="slide2"
          className="carousel-item relative w-full grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {/* card 1 */}
          <a href="">
            <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
              <figure className="h-56">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Category x</h2>
              </div>
            </div>
          </a>
          {/* card 2 */}
          <a href="">
            <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
              <figure className="h-56">
                <img
                  src="https://blog.info-brocantes.com/wp-content/uploads/iStock-168432580-1-1.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Category x</h2>
              </div>
            </div>
          </a>
          {/* card 3 */}
          <a href="">
            <div className="card h-auto max-w-full bg-base-100 shadow hover:contrast-50">
              <figure className="h-56">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Category x</h2>
              </div>
            </div>
          </a>
          {/* button */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href="#slide1" className="btn">
              ❮
            </a>
          </div>
        </div>
      </div>
      {/* border */}
      <div className="border mb-6" />
    </div>
  );
}

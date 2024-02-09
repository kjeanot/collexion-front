// Component DaisyUI

export default function Carrousel() {
  return (
    <div>
      {/* carrousel */}
      <div class="carousel carousel-center rounded-box grid grid-cols-2 md:grid-cols-3 mt-6 gap-6">
        {/* item 1 */}
        <div id="item1" class="carousel-item relative w-full mb-6">
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
        {/* item2 */}
        <div id="item2" class="carousel-item relative w-full mb-6">
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
        {/* button */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
          <a href="#item1" className="btn">
            ❮
          </a>
          <a href="#item2" className="btn">
            ❯
          </a>
        </div>
      </div>
      {/* border */}
      <div className="border shadow mb-6" />
    </div>
  );
}

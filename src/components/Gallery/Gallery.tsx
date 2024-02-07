import React from "react";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        <div className="hover:contrast-50 relative">
          <a href="">
            <img
              className="h-auto max-w-full relative z-1"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
            <p className="block h-6 w-full top-[calc(50%-0.75rem)] absolute text-center z-2 text-xl font-bold bg-white bg-opacity-25">
              Catégorie x
            </p>
          </a>
        </div>
        <div className="hover:blur-sm">
          <a href="">
            <img
              className="h-auto max-w-"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="hover:drop-shadow-md hover:contrast-50">
          <img
            className="h-auto max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

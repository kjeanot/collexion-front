import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useLocation, useParams } from 'react-router-dom';
import {
  postCollection,
  setCollectionDescription,
  setCollectionImage,
  setCollectionName,
  updateCollection,
} from '../../store/reducers/collectionsReducer';
import CloudinaryUploadWidget from "../Upload/UploadButton";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export default function SingleCollectionEdit() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.collections.currentCollection);

  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("dpykdy5lp");
  // Replace with your own upload preset
  const [uploadPreset] = useState("ml_default");

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);
  console.log(publicId);

  return (
    <form className="md:w-1/2 mx-auto flex flex-col">
      <h1 className="text-3xl mb-6">Editer la collection</h1>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Nom de la collection</span>
        </div>
        <input
          type="text"
          placeholder={data ? data.name : 'Nom de la collection'}
          value={data ? data.name : ''}
          className="input input-bordered w-full"
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            dispatch(setCollectionName(evt.currentTarget.value))
          }
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Description de la collection</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder={data ? data.description : 'Description de la collection'}
          value={data ? data.description : ''}
          onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
            dispatch(setCollectionDescription(evt.currentTarget.value))
          }
        ></textarea>
      </label>
      {/* <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Description de la collection</span>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-neutral w-full"
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            dispatch(setCollectionImage(evt.currentTarget.value))
          }
        />
      </label> */}
      <h3>Cloudinary Upload Widget Example</h3>
      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
      <p>
        <a
          href="https://cloudinary.com/documentation/upload_widget"
          target="_blank"
        >
          Upload Widget User Guide
        </a>
      </p>
      <p>
        <a
          href="https://cloudinary.com/documentation/upload_widget_reference"
          target="_blank"
        >
          Upload Widget Reference
        </a>
      </p>
      <div style={{ width: "800px" }}>
        <AdvancedImage
          style={{ maxWidth: "100%" }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div>
      {data && <h2 className="text-xl my-6">Objets rattachés</h2>}
      {(data?.myobjects ?? []).map((_, index) => (
        <div
          key={index}
          className="flex shadow-lg place-items-center rounded-lg overflow-hidden border mb-4"
        >
          <img
            src="https://picsum.photos/200"
            className="max-w-16 mr-4 object-fill"
          />
          <p className="block flex-1">
            Object avec un nom super long pour tester
          </p>
          <button
            className="btn rounded-none h-16"
            onClick={(evt) => {
              evt.preventDefault();
              console.log('supprimé');
            }}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 my-6 text-center mb-2 mx-auto"
        onClick={() => {
          if (data.id) {
            dispatch(updateCollection(data.id))
          } else {
            dispatch(postCollection())
          }
        }
        }
      >
        Mettre à jour
      </button>
    </form>
  );
}

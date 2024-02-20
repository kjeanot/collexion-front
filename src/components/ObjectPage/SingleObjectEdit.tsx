import { useLocation, useParams } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  postObject,
  setObjectDescription,
  setObjectImage,
  setObjectName,
  setObjectCollections,
  updateObject,
  setObjectState,
  setObjectCategory,
} from '../../store/reducers/objectsReducer';
import CloudinaryUploadWidget from '../Upload/UploadButton';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { ICategory, ICollection, IObject } from '../../types/types';
import { fetchCategories } from '../../store/reducers/categoriesReducer';
import { fetchCollections } from '../../store/reducers/collectionsReducer';

type CurrentObject = IObject & {};

export default function SingleObjectEdit() {
  const dispatch = useAppDispatch();

  const data: CurrentObject = useAppSelector(
    (state) => state.objects.currentObject
  );

  const currentCollection: ICollection = useAppSelector(
    (state) => state.collections.currentCollection
  );

  // Retreive collections which contains the current object
  const relatedCollections = useAppSelector(
    (state) => state.objects.currentObject.myCollections
  );

  const categories: ICategory[] = useAppSelector(
    (state) => state.categories.list
  );

  const [publicId, setPublicId] = useState('');
  // Replace with your own cloud name
  const [cloudName] = useState('dpykdy5lp');
  // Replace with your own upload preset
  const [uploadPreset] = useState('ml_default');

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
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

  // Create a Cloudinary instance and set the cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const myImage = cld.image(publicId);

  /**
   *
   * Returns an updated array of the objects associated to the collection, less the deleted ones.
   * Dispatches the array to the state.
   *
   * @return {void}
   */
  function handleCollectionsRemoving(id: number): void {
    let result: ICollection[] = [];
    if (data) {
      data?.relatedMyCollections?.map((el) => {
        if (el.id !== undefined && el.id !== id) {
          result.push({ id: el.id });
        }
      });
    }
    dispatch(setObjectCollections(result));
  }

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCollections());

    // If it's not an existing object, affect the current collection to the object
    !data.id && dispatch(setObjectCollections([{ id: currentCollection.id }]));
  }, []);

  return (
    <form className="md:w-1/2 mx-auto flex flex-col">
      <h1 className="text-3xl mb-6">Editer l'objet</h1>
      <label className="form-control w-full" htmlFor="object-name">
        <div className="label">
          <span className="label-text">Nom de l'objet</span>
        </div>
        <input
          id="object-name"
          type="text"
          placeholder={data ? data.name : "Nom de l'objet"}
          value={data ? data.name : ''}
          className="input input-bordered w-full"
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            dispatch(setObjectName(evt.currentTarget.value))
          }
        />
      </label>
      <label className="form-control w-full" htmlFor="object-description">
        <div className="label">
          <span className="label-text">Description de l'objet</span>
        </div>
        <textarea
          id="object-description"
          className="textarea textarea-bordered h-24"
          placeholder={data ? data.description : "Description de l'objet"}
          value={data ? data.description : ''}
          onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
            dispatch(setObjectDescription(evt.currentTarget.value))
          }
        ></textarea>
      </label>
      <label className="form-control w-full" htmlFor="object-state">
        <div className="label">
          <span className="label-text">État de l'objet</span>
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          id="object-state"
          value={data.state}
          onChange={(evt) => dispatch(setObjectState(evt.currentTarget.value))}
        >
          <option value="Excellent">Excellent</option>
          <option value="Bon">Bon</option>
          <option value="Moyen">Moyen</option>
          <option value="À restaurer">À restaurer</option>
        </select>
      </label>
      <label className="form-control w-full" htmlFor="object-category">
        <div className="label">
          <span className="label-text">Catégorie de l'objet</span>
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          id="object-category"
          value={data.category}
          onChange={(evt) =>
            dispatch(setObjectCategory(parseInt(evt.currentTarget.value)))
          }
        >
          {/* <optgroup label="Animaux">
              <option value="Canards">Canards</option>
              <option value="Poissons">Poissons</option>
          </optgroup>
          <optgroup label="Figurines">
              <option value="Figurines de films">Figurines de films</option>
              <option value="Figurines d'anime">Figurines d'anime</option>
              <option value="Figurines de jeux-video">Category 1</option>
          </optgroup> */}
          {categories.map((category) => (
            <option value={category.id}>{category.name}</option>
          ))}
        </select>
      </label>

      <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
      <div style={{ width: '800px' }}>
        <AdvancedImage
          style={{ maxWidth: '100%' }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div>

      {data && <h2 className="text-xl my-6">Collection(s) rattachée(s)</h2>}
      {relatedCollections?.length > 0 ? (
        relatedCollections.map((object: ICollection, index) => (
          <div
            key={index}
            className="flex shadow-lg place-items-center rounded-lg overflow-hidden border mb-4"
          >
            <img
              src="https://picsum.photos/200"
              className="max-w-16 mr-4 object-fill"
            />
            <p className="block flex-1">{object.name}</p>
            <button
              className="btn rounded-none h-16"
              onClick={(evt) => {
                evt.preventDefault();
                handleCollectionsRemoving(object.id as number);
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
        ))
      ) : (
        <div className="flex shadow-lg place-items-center rounded-lg overflow-hidden border mb-4">
          <img
            src="https://picsum.photos/200"
            className="max-w-16 mr-4 object-fill"
          />
          <p className="block flex-1">{currentCollection.name}</p>
        </div>
      )}
      <button
        type="button"
        className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 my-6 text-center mb-2 mx-auto"
        onClick={() => {
          data.id ? dispatch(updateObject(data.id)) : dispatch(postObject());
        }}
      >
        {data.id ? 'Mettre à jour' : 'Publier'}
      </button>
    </form>
  );
}

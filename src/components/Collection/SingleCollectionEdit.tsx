import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Navigate, redirect, useLocation, useParams } from 'react-router-dom';
import {
  fetchSingleCollection,
  postCollection,
  resetCurrentCollection,
  setCollectionDescription,
  setCollectionImage,
  setCollectionName,
  setCollectionObjects,
  setCollectionRedirectPath,
  setCollectionRelatedObjects,
  updateCollection,
  uploadCollectionImage,
} from '../../store/reducers/collectionsReducer';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { ICollection, IObject } from '../../types/types';

type CurrentCollection = ICollection & {};

export default function SingleCollectionEdit() {
  const dispatch = useAppDispatch();
  const data: CurrentCollection = useAppSelector(
    (state) => state.collections.currentCollection
  );

  const redirectPath = useAppSelector((state) => state.collections.redirectPath);

  const loggedUserId = useAppSelector((state) => state.user.loggedUser.id);
  console.log('loggedUserId', loggedUserId);

  const image = useAppSelector(
    (state) => state.collections.currentCollection.image
  );

  const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      dispatch(setCollectionImage(evt.target.files[0]));
      dispatch(uploadCollectionImage());
    }
  };

  /**
   *
   * Returns an updated array of the objects associated to the collection, less the deleted ones.
   * Dispatches the array to the state.
   *
   * @return {void}
   */
  function handleObjectsRemoving(id: number): void {
    let extractedObjects: IObject[] = [];
    let remainingObjects: IObject[] = [];
    if (data) {
      data?.myobjects?.map((el) => {
        if (el.id !== undefined && el.id === id) {
          extractedObjects.push(el);
        } else {
          remainingObjects.push(el);
        }
      });
    }
    dispatch(setCollectionRelatedObjects(extractedObjects));
    dispatch(setCollectionObjects(remainingObjects));
  }
  useEffect(() => {
    location.pathname === '/collection/new' &&
      dispatch(resetCurrentCollection());
  }, []);

  useEffect(() => {
    dispatch(setCollectionRelatedObjects([]));
  }, []);

  return (
    <>
      <form className="md:w-1/2 mx-auto flex flex-col">
        <h1 className="text-3xl mb-6">Editer la collection</h1>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Nom de la collection</span>
          </div>
          <input
            type="text"
            placeholder={data ? data.name : 'Nom de la collection'}
            defaultValue={data ? data.name : ''}
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
            placeholder={
              data ? data.description : 'Description de la collection'
            }
            defaultValue={data ? data.description : ''}
            onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
              dispatch(setCollectionDescription(evt.currentTarget.value))
            }
          ></textarea>
        </label>

        <label className="form-control w-full" htmlFor="collection-image">
          <div className="label">
            <span className="label-text">Image de la collection</span>
          </div>
          <input
            type="file"
            id="collection-image"
            className="file-input file-input-bordered w-full max-w-xs"
            onChange={(evt) => handleImageUpload(evt)}
          />
        </label>
        {image && typeof image === 'string' && (
          <img
            src={image}
            alt="collection picture"
            className="w-32 h-32 mx-auto my-6"
          />
        )}

        {data && <h2 className="text-xl my-6">Objets rattachés</h2>}
        {data.myobjects && data.myobjects.length > 0
          ? data.myobjects?.map((object: IObject, index) => (
              <div
                key={index}
                className="flex shadow-lg place-items-center rounded-lg overflow-hidden border mb-4"
              >
                <img
                  src={
                    object.image && typeof object.image === 'string'
                      ? object.image
                      : 'https://via.placeholder.com/150'
                  }
                  className="max-w-16 mr-4 object-fill"
                />
                <p className="block flex-1">{object.name}</p>
                <button
                  className="btn rounded-none h-16"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleObjectsRemoving(object.id as number);
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
          : "Aucun objet rattaché pour l'instant"}
        <button
          type="button"
          className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 my-6 text-center mb-2 mx-auto"
          onClick={() => {
            data.id
              ? dispatch(updateCollection(data.id))
              : dispatch(postCollection());
            data.id ? dispatch(setCollectionRedirectPath(`/collection/${data.id}`)) : dispatch(setCollectionRedirectPath(`/user/${loggedUserId}`));
          }}
        >
          Mettre à jour
        </button>
      </form>
      {redirectPath !== '' && <Navigate to={redirectPath} />}
    </>
  );
}

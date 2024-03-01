import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  postObject,
  setObjectDescription,
  setObjectName,
  setObjectCollections,
  updateObject,
  setObjectState,
  setObjectCategory,
  uploadObjectImage,
  setObjectImage,
  fetchSingleObject,
} from '../../store/reducers/objectsReducer';
import { ICategory, ICollection, IObject } from '../../types/types';
import { fetchCategories } from '../../store/reducers/categoriesReducer';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import { Navigate } from 'react-router-dom';

type CurrentObject = IObject & {};

export default function SingleObjectEdit() {
  const dispatch = useAppDispatch();

  // Retreive the current object stored in state
  const data: CurrentObject = useAppSelector(
    (state) => state.objects.currentObject
  );

  // Retreive the current collection stored in state
  const currentCollection: ICollection = useAppSelector(
    (state) => state.collections.currentCollection
  );

  // Retreive collections which contains the current object
  const relatedCollections = useAppSelector(
    (state) => state.objects.currentObject.myCollections
  );
  // Retreive the categories list
  const categories: ICategory[] = useAppSelector(
    (state) => state.categories.list
  );

  const image = useAppSelector((state) => state.objects.currentObject.image);

  const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) {
      dispatch(setObjectImage(evt.target.files[0]));
      dispatch(uploadObjectImage());
    }
  };

  /**
   *
   * Returns an updated array of the collections associated to the object, less the deleted ones.
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

  // Use state to redirect to the collection page after the object has been updated or created.
  const [redirectPath, setRedirectPath] = useState<null | string>(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCollections());

    // Setting default value for the object state
    dispatch(setObjectState(data.state ? data.state : 'Excellent'));

    // If it's an existing object and its data is stored in state : setting the currentObject (used for actions) properties in the object state
    data.category?.id && dispatch(setObjectCategory(data.category.id));
    data.myCollections &&
      dispatch(
        setObjectCollections(
          data.myCollections.map((collection) => {
            return { id: collection.id };
          })
        )
      );

    // If it's not an existing object, affect the current collection to the object
    !data.id && dispatch(setObjectCollections([{ id: currentCollection.id }]));
  }, []);

  return (
    <>
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
            defaultValue={data ? data.name : ''}
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
            defaultValue={data ? data.description : ''}
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
            value={data.state ? data.state : 'Excellent'}
            onChange={(evt) =>
              dispatch(setObjectState(evt.currentTarget.value))
            }
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
            defaultValue={data.category?.id ? data.category.id : 2}
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
        <label className="form-control w-full" htmlFor="object-image">
          <div className="label">
            <span className="label-text">Image de l'objet</span>
          </div>
          <input
            type="file"
            id="object-image"
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
        {data && <h2 className="text-xl my-6">Collection(s) rattachée(s)</h2>}
        {relatedCollections && relatedCollections?.length > 0 ? (
          relatedCollections.map((collection: ICollection, index) => (
            <div
              key={index}
              className="flex shadow-lg place-items-center rounded-lg overflow-hidden border mb-4 h-16"
            >
              <img
                src={
                  collection.image && typeof collection.image === 'string'
                    ? collection.image
                    : 'https://via.placeholder.com/150'
                }
                className="max-w-16 mr-4 object-fill h-16"
              />
              <p className="block flex-1">{collection.name}</p>
              {relatedCollections?.length > 1 && (
                <button
                  className="btn rounded-none h-16"
                  onClick={(evt) => {
                    evt.preventDefault();
                    handleCollectionsRemoving(collection.id as number);
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
              )}
            </div>
          ))
        ) : (
          <div className="flex shadow-lg place-items-center rounded-lg overflow-hidden border mb-4">
            <img
              src={
                currentCollection.image &&
                typeof currentCollection.image === 'string'
                  ? currentCollection.image
                  : 'https://via.placeholder.com/150'
              }
              className="max-w-16 mr-4 object-fill h-16"
            />
            <p className="block flex-1">{currentCollection.name}</p>
          </div>
        )}
        <button
          type="button"
          className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 my-6 text-center mb-2 mx-auto"
          onClick={() => {
            data.id ? dispatch(updateObject(data.id)) : dispatch(postObject());
            data.id && dispatch(fetchSingleObject(data.id));
            data.id
              ? setTimeout(() => {
                  setRedirectPath(`/object/${data.id}`);
                }, 1000)
              : currentCollection.id
              ? setTimeout(() => {
                  setRedirectPath(`/collection/${currentCollection.id}`);
                }, 1000)
              : setTimeout(() => {
                  setRedirectPath(`/`);
                }, 1000);
          }}
        >
          {data.id ? 'Mettre à jour' : 'Publier'}
        </button>
      </form>
      {redirectPath && <Navigate to={redirectPath} />}
    </>
  );
}

import { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Rating from '../Rating/Rating';
import ObjectCard from '../Object/ObjectCard';
import { ICollection, IObject } from '../../types/types';
import Avatar from '../Avatar/Avatar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  deleteCollection,
  fetchSingleCollection,
} from '../../store/reducers/collectionsReducer';
import Modal from '../Modal/Modal';
import { closeModal, switchModalDisplay } from '../../store/reducers/appReducer';
import { resetCurrentObject } from '../../store/reducers/objectsReducer';
import {
  addToFavorites,
  fetchUserInfo,
  removeFromFavorites,
} from '../../store/reducers/userReducer';

export default function SingleCollection() {
  // Using useParams() to retrieve the collection id, passed by the router params
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const showModal = useAppSelector((state) => state.app.showModal);
  const { data } = useLoaderData() as Awaited<ReturnType<typeof Object>>;

  const loggedUserId = useAppSelector((state) => state.user.loggedUser.id);
  const loggedUserFavorites = useAppSelector(
    (state) => state.user.loggedUser.myfavoritescollections
  );

 
  useEffect(() => {
    dispatch(fetchSingleCollection(data.id));
    dispatch(closeModal());
  }, []);

  useEffect(() => {
    loggedUserId && dispatch(fetchUserInfo(loggedUserId));
  }, []);

  return (
    <>
      {
        // If the collection's delete button is clicked, the showModal variable is switched to true so the modal components is rendered
        showModal && (
          // The modal receive the name of the action to trigger and the function to execute when the confirm button of the modal is clicked
          <Modal
            actionLabel="Supprimer la collection"
            action="delete"
            entity="collection"
            id={data.id}
          />
        )
      }
      <header className="flex flex-wrap border border-b-2 mb-6">
        <img src={data.image} className="w-full md:w-1/3 object-cover" />
        <div className="w-full md:w-2/3 p-6">
          <div className="flex justify-end">
            {
              // Display edit and delete buttons only if the collections belons to the loggedUser
              data.user.id === loggedUserId && (
                <>
                  <Link to={`/collection/${data.id}/edit`}>
                    <button className="btn btn-circle mr-4">
                      <svg
                        className="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Link>
                  <button
                    className="btn btn-circle"
                    onClick={() => dispatch(switchModalDisplay())}
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
                </>
              )
            }
            {
              // Heart unfilled button : displayed if the current collection isn't in the loggedUser's favorite collections list.
              // Onclick, dispatches the addToFavorite action
              !loggedUserFavorites?.some(
                (collection: ICollection) => collection.id === data.id
              ) && (
                <button
                  className="btn btn-circle ml-4"
                  onClick={(e) => {
                    e.preventDefault();
                    loggedUserId
                      ? dispatch(addToFavorites(data.id))
                      : navigate('/subscribe');
                    loggedUserId
                      ? dispatch(fetchUserInfo(loggedUserId))
                      : navigate('/subscribe');
                  }}
                >
                  <svg
                    className="w-6 h-6 text-customred"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    />
                  </svg>
                </button>
              )
            }
            {
              // Heart filled button : displayed only if the current collection is in the loggedUser's favorite collections list
              // Onclick, dispatches the removeFromFavorite action
              loggedUserFavorites?.some(
                (collection: ICollection) => collection.id === data.id
              ) && (
                <button
                  className="btn btn-circle ml-4"
                  onClick={(e) => {
                    e.preventDefault();
                    loggedUserId
                      ? dispatch(removeFromFavorites(data.id))
                      : navigate('/subscribe');
                    loggedUserId
                      ? dispatch(fetchUserInfo(loggedUserId))
                      : navigate('/subscribe');
                  }}
                >
                  <svg
                    className="w-6 h-6 text-customred"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
                  </svg>
                </button>
              )
            }
          </div>

          <h1 className="my-5 text-2xl font-bold">{data.name}</h1>
          <div className="flex flex-wrap justify-between content-center">
            <Link to={`/user/${data.user.id}`}>
              <Avatar
                nickname={data.user.nickname}
                picture={data.user.picture}
              />
            </Link>
            <Rating value={data.rating} />
          </div>
          <section className="my-5">
            <h2 className="text-xl">Description</h2>
            <p>{data.description}</p>
          </section>
        </div>
      </header>
      <h2 className="text-xl mb-6">Objets de cette collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {data.myobjects.map((object: IObject) => (
          <ObjectCard id={object.id} name={object.name} image={object.image} />
        ))}
        {
          // Shows create new collection button if the user is logged in and the collection belongs to him
          loggedUserId === data.user.id && (
            <Link
              to="/object/new"
              onClick={() => dispatch(resetCurrentObject())}
            >
              <button className="btn btn-square h-full w-full">
                + Ajouter un objet
              </button>
            </Link>
          )
        }
      </div>
    </>
  );
}

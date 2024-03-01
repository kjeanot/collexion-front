import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {
  deleteObject,
  fetchComments,
  fetchSingleObject,
} from '../../store/reducers/objectsReducer';
import { IObject } from '../../types/types';
import Avatar from '../Avatar/Avatar';
import ObjectCard from '../Object/ObjectCard';
import Background from '../Background/Background';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Modal from '../Modal/Modal';
import { closeModal, switchModalDisplay } from '../../store/reducers/appReducer';
import Comments from '../Comment/Comments';

export default function ObjectPage() {
  const { data } = useLoaderData() as Awaited<ReturnType<typeof Object>>;

  const dispatch = useAppDispatch();
  const showModal = useAppSelector((state) => state.app.showModal);

  const loggedUserId = useAppSelector((state) => state.user.loggedUser.id);

   useEffect(() => {
    dispatch(fetchSingleObject(data.id));
    dispatch(fetchComments());
    dispatch(closeModal());
  }, []);
  return (
    <>
      {showModal && (
        <Modal
          actionLabel="Supprimer l'objet"
          action="delete"
          entity="object"
          id={data.id}
        />
      )}
      <div className="relative">
        <Background />
      </div>
      <div className="relative z-10">
        <header className="flex flex-wrap border border-b-2 mb-6 bg-white">
          <figure className="w-full md:w-1/3">
            <img src={data.image} className="h-full object-cover" />
          </figure>
          <div className="w-full md:w-2/3 p-6">
            {data.myCollections[0].user.id &&
              data.myCollections[0].user.id === loggedUserId && (
                <div className="flex justify-end">
                  <Link to={`/object/${data.id}/edit`}>
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
                </div>
              )}
            <h1 className="my-5 text-2xl font-bold text-customred">
              {data.name}
            </h1>
            <div className="flex flex-wrap justify-between content-center">
              {data.myCollection &&
                data.myCollection.length > 0 &&
                data.myCollections[0].user.id && (
                  <Link to={`/user/${data.myCollections[0].user.id}`}>
                    <Avatar
                      nickname={data.myCollections[0].user.nickname}
                      picture={data.myCollections[0].user.picture}
                    />
                  </Link>
                )}
            </div>
            <section className="my-5">
              <h2 className="text-xl">Description</h2>
              <p>{data.description}</p>
            </section>
            <section className="border border-b-2  max-w-md p-2">
              {data.state && <p>Etat : {data.state}</p>}
              <p>
                Collection :{' '}
                <Link
                  to={
                    data.myCollections && data.myCollections[0]?.id
                      ? `/collection/${data.myCollections[0]?.id}`
                      : '/'
                  }
                  className="link link-neutral"
                >
                  {data.myCollections &&
                    data.myCollections[0]?.name &&
                    data.myCollections[0].name}
                </Link>
              </p>
              <p>
                Catégorie :{' '}
                <Link
                  to={`/category/${data.category.id}`}
                  className="link link-neutral"
                >
                  {data.category.name}
                </Link>
              </p>
            </section>
          </div>
        </header>

        <h2 className="text-xl mb-6">Objets similaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.myobjects
            ? data.myobjects?.map((object: IObject) => (
                <ObjectCard
                  id={object.id}
                  name={object.name}
                  image={object.image}
                />
              ))
            : "Aucune recommandation pour l'instant"}
        </div>
        {<Comments objectId={data.id} />}
      </div>
    </>
  );
}

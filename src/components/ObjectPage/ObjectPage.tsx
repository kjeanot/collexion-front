import { ICollection } from '../../types/types';
import Avatar from '../Avatar/Avatar';
import ObjectCard from '../Object/ObjectCard';
import Comment from '../Comment/Comment';
import Background from '../Background/Background';

type Props = {};

export default function ObjectPage({}: Props) {
  const data: ICollection = {
    id: 2,
    name: 'Mon objet',
    image: 'https://via.placeholder.com/150',
    description:
      '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Pretium lectus quam id leo in vitae turpis massa. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Ac turpis egestas integer eget aliquet nibh praesent tristique. ',
    rating: null,
    user: {
      id: 3,
      nickname: 'user 1',
      picture: null,
    },
    myobjects: [
      {
        id: 4,
        name: 'Object 0',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 5,
        name: 'Object 1',
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 6,
        name: 'Object 2',
        image: 'https://via.placeholder.com/150',
      },
    ],
    created_at: '2024-02-12T10:42:43+00:00',
  };
  return (
    <>
      <div className="relative">
        <Background />
      </div>
      <div className="relative z-10">
        <header className="flex flex-wrap border border-b-2 mb-6 bg-white">
          <img src={data.image} className="w-full md:w-1/3 object-cover" />
          <div className="w-full md:w-2/3 p-6">
            <div className="flex justify-end">
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
                    clip-rule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="btn btn-circle">
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
            <h1 className="my-5 text-2xl font-bold text-customred">
              {data.name}
            </h1>
            <div className="flex flex-wrap justify-between content-center">
              {<Avatar nickname={data.user?.nickname} />}
            </div>
            <section className="my-5">
              <h2 className="text-xl">Description</h2>
              <p>{data.description}</p>
            </section>
            <section className="border border-b-2  max-w-md p-2">
              <p>Etat :</p>
              <p>Collection :</p>
              <p>Catégorie :</p>
            </section>
          </div>
        </header>

        <h2 className="text-xl mb-6">Autres objets de cette collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {data && data.myobjects?.map((object) => (
            <ObjectCard
              id={object.id}
              name={object.name}
              image={object.image}
            />
          ))}
          <button className="btn btn-square h-full w-full">
            + Ajouter un objet
          </button>
        </div>
        <Comment />
      </div>
    </>
  );
}

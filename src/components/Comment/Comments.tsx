import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import avatar from '../../assets/avatar-generations_bssq.jpg';
import { IComment } from '../../types/types';
import { postComment, setComment } from '../../store/reducers/objectsReducer';
import { useEffect, useState } from 'react';
import { fetchSingleObject } from '../../store/reducers/objectsReducer';

export default function Comments({ objectId }: { objectId: number }) {
  const dispatch = useAppDispatch();

  const comments = useAppSelector(
    (state) => state.objects.currentObject.comments
  );
  

  const [nbComments, setNbComments] = useState(0);

  useEffect(() => {
    dispatch(fetchSingleObject(objectId));
  }, [nbComments, dispatch, objectId]);

  return (
    <>
      <h2 className="text-2xl font-semibold border-b mt-6">Commentaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-6 mb-6 max-h-[500px] overflow-y-scroll">
          {comments &&
            [...comments]
              .sort((a, b) => {
                if (a.id > b.id) {
                  return -1;
                } else return 1;
              })
              .map((comment: IComment) => (
                <div
                  key={comment.id}
                  className="card w-full border mb-6 bg-gray-100"
                >
                  <div className="card-body">
                    <div className="flex">
                      <img
                        className="w-10 h-10 ml-2 mr-2 rounded-full"
                        src={comment.user?.picture ? comment.user.picture : avatar}
                        alt=""
                      />
                      <h2 className="card-title">{comment.user?.nickname}</h2>
                    </div>
                    <p>{comment.content}</p>
                  </div>
                </div>
              ))}
        </div>
        <div className="p-6 mb-6 bg-gray-100 h-fit">
          <h2 className="text-2xl font-semibold">Laisser un commentaire</h2>
          {/* border */}
          <div className="border mt-6" />
          {/* form */}
          <textarea
            className="textarea textarea-bordered w-full mt-6"
            placeholder="Commentaire"
            required
            onChange={(evt) => dispatch(setComment(evt.currentTarget.value))}
          />
          <button
            type="submit"
            className="flex justify-end text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 text-center mt-6 me-2 mb-2"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(postComment(objectId));
              setNbComments((prev) => prev + 1);
              dispatch(fetchSingleObject(objectId));
              dispatch(setComment(''));
            }}
          >
            Envoyer votre commentaire
          </button>
        </div>
      </div>
    </>
  );
}

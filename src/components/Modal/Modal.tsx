import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { switchModalDisplay } from '../../store/reducers/appReducer';
import { setCollectionRedirectPath } from '../../store/reducers/collectionsReducer';
import { Navigate } from 'react-router-dom';

interface Props {
  actionLabel: string;
  action: any;
}

/**
 * The modal receive the name of the action to trigger and the function to execute when the confirm button of the modal is clicked
 *
 */
export default function Modal({ actionLabel, action }: Props) {
  const dispatch = useAppDispatch();
  const loggedUserId = useAppSelector((state) => state.user.loggedUser.id);
  const collectionRedirectPath = useAppSelector((state) => state.collections.redirectPath);
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="backdrop-blur-sm bg-black/50 overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full flex"
    >
      <div className="relative p-4 w-full max-w-md max-h-full md:inset-0">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  "
            // When clicked, we dispatch the switchModalDisplay action to switch the display state of the modal component.
            onClick={() => dispatch(switchModalDisplay())}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="text-lg font-normal text-gray-500">{actionLabel}</h3>
            <p className="mb-5 ">
              Êtes-vous sûr(e) de vouloir effectuer cette action ?
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 text-center me-2 mb-2"
              onClick={() => {
                action();
                dispatch(switchModalDisplay());
                loggedUserId && dispatch(setCollectionRedirectPath(`/user/${loggedUserId}`));
              }} /* When clicked, we execute the action passed as a prop to the modal component */
            >
              {actionLabel}
            </button>
            <button
              onClick={() => {
                dispatch(switchModalDisplay())
                dispatch(setCollectionRedirectPath(`/user/${loggedUserId}`))
              }}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
      {collectionRedirectPath !== '' && <Navigate to={collectionRedirectPath} />}
    </div>
  );
}

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { switchModalDisplay } from '../../store/reducers/appReducer';

interface Props {
  actionLabel: string;
  action: void;
}

export default function Modal({ actionLabel, action }) {
  const dispatch = useAppDispatch();
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{actionLabel}</h3>
        <p className="py-4">
          Êtes-vous sûr(e) de vouloir effectuer cette action ?
        </p>
        <div className="modal-action">
          <button className="btn" onClick={() => dispatch(action)}>
            {actionLabel}
          </button>
          <button
            className="btn"
            onClick={() => dispatch(switchModalDisplay())}
          >
            Annuler
          </button>
        </div>
      </div>
    </dialog>
  );
}

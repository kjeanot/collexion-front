import React from 'react';

interface Props {
  actionLabel: string;
  action: void;
}

export default function Modal({ actionLabel, action }) {
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{actionLabel}</h3>
        <p className="py-4">Êtes-vous sûr(e) de vouloir effectuer cette action ?</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

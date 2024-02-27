import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUserInfo, setEmail, setNickname, setPassword, setPicture, setUserDescription, uploadUserImage, userUpdate } from '../../store/reducers/userReducer';

export default function UserEdit() {
  const { data } = useLoaderData() as Awaited<ReturnType<typeof Object>>;
  
  const dispatch = useAppDispatch();

  const picture = useAppSelector((state) => state.user.loggedUser.picture);

  const handleImageUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {

    evt.target.files && dispatch(setPicture(evt.target.files[0]));
    dispatch(uploadUserImage());
  }

  return (
    <form className="md:w-1/2 mx-auto flex flex-col">
      <h1 className="text-3xl mb-6">Editer votre profil</h1>
      <label className="form-control w-full" htmlFor="user-nickname">
        <div className="label">
          <span className="label-text">Pseudonyme</span>
        </div>
        <input
          id="user-nickname"
          type="text"
          placeholder={data.nickname ? data.nickname : 'Votre nom'}
          defaultValue={data.nickname ? data.nickname : ''}
          className="input input-bordered w-full"
          onChange={(evt) => dispatch(setNickname(evt.currentTarget.value))}
        />
      </label>
      <label className="form-control w-full" htmlFor="user-email">
        <div className="label">
          <span className="label-text">E-mail</span>
        </div>
        <input
          id="user-email"
          type="text"
          placeholder={data.email ? data.email : 'Votre nom'}
          defaultValue={data.email ? data.email : ''}
          className="input input-bordered w-full"
          onChange={(evt) => dispatch(setEmail(evt.currentTarget.value))}
        />
      </label>
      <label className="form-control w-full" htmlFor="user-description">
        <div className="label">
          <span className="label-text">Votre description</span>
        </div>
        <textarea
          id="user-description"
          className="textarea textarea-bordered h-24"
          placeholder={data.description ? data.description : "Votre description"}
          defaultValue={data ? data.description : ''}
          onChange={(evt) => dispatch(setUserDescription(evt.currentTarget.value))}
        ></textarea>
      </label>
      <label className="form-control w-full" htmlFor="user-picture">
        <div className="label">
          <span className="label-text">Votre photo de profil</span>
        </div>
        <input type="file" id="user-picture" className="file-input file-input-bordered w-full max-w-xs" onChange={(evt) => handleImageUpload(evt)}/>
      </label>
      {picture && typeof picture === "string" && <img src={picture} alt="user picture" className="w-32 h-32 rounded-full mx-auto my-6"/>}
      
      <button
        type="button"
        className="text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 my-6 text-center mb-2 mx-auto"
        onClick={() => {
          dispatch(userUpdate());
          dispatch(fetchUserInfo(data.id));
        }}
      >
        {data.id ? 'Mettre à jour' : 'Publier'}
      </button>
    </form>
  );
}

import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Background from '../Background/Background';
import { fetchObjects } from '../../store/reducers/objectsReducer';
import GalleryObjects from '../Gallery/GalleryObjects';

export default function ObjectsRandom() {
  const loaderRandomObjects = useLoaderData() as Awaited<ReturnType<typeof Object>>;
  // const dispatch = useAppDispatch();
  // const data = useAppSelector((state) => state.objects.list);
  // useEffect(() => {
  //   dispatch(fetchObjects());
  // }, []);
  return (
    <div>
      <div className="relative">
        <Background />
        <div>
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl text-customred mt-10 mb-8">
              Objets au hasard
            </h2>
          </div>
          <GalleryObjects objects={loaderRandomObjects.data} />
        </div>
      </div>
    </div>
  );
}

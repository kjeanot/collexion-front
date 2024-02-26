import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Background from '../Background/Background';
import { fetchObjects } from '../../store/reducers/objectsReducer';
import GalleryObjects from '../Gallery/GalleryObjects';
import CarrouselObjects from '../Carrousel/CarrouselObjects';
import Filter from '../Filter/Filter';

export default function Objects() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.objects.list);
  useEffect(() => {
    dispatch(fetchObjects());
  }, []);
  return (
    <div>
      <div className="relative">
        <Background />
        <div>
          <h1 className="md:h-20 p-5 text-center text-2xl font-bold text-white bg-gradient-to-r from-customred to-customorange">
            Objets
          </h1>
          <h2 className="font-bold text-2xl text-customred mt-10">
            Objets au hasard
          </h2>
          <CarrouselObjects objects={data} />
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl text-customred mt-10 mb-8">
              Tous les Objets
            </h2>
            <Filter />
          </div>
          <GalleryObjects objects={data} />
        </div>
      </div>
    </div>
  );
}

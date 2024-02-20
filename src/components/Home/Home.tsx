import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Background from '../Background/Background';
import CarrouselHome from '../Carrousel/CarrouselHome';
import CollectionCTA from '../Collection/CollectionCTA';
import ObjectCard from '../Object/ObjectCard';
import { fetchCollections } from '../../store/reducers/collectionsReducer';
import { fetchObjects } from '../../store/reducers/objectsReducer';
import { fetchCategories } from '../../store/reducers/categoriesReducer';

export default function Home() {
  const dispatch = useAppDispatch();
  const dataCollections = useAppSelector((state) => state.collections.list);
  const dataObjects = useAppSelector((state) => state.objects.list);
  const dataCategories = useAppSelector((state) => state.categories.list);

  useEffect(() => {
    dispatch(fetchCollections());
    dispatch(fetchObjects());
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      {/* banner */}
      <h1 className="md:h-20 p-5 text-center text-2xl font-bold text-white bg-gradient-to-r from-customred to-customorange">
        Chaque objet a son histoire, et chaque collection raconte votre parcours
        !
      </h1>
      <div className="relative">
        <Background />
      </div>
      <h2 className="font-bold text-2xl text-customred mt-10">
        Collection à la une
      </h2>
      <CarrouselHome collections={dataCollections} />
      <div className="flex justify-end">
        <Link to="/collections">
          <button
            type="button"
            className="relative text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-lg px-8 py-2 text-center me-2 mb-2"
          >
            Toutes les collections
          </button>
        </Link>
      </div>
      <h2 className="font-bold text-2xl text-customred mt-10">
        Les derniers objets ajoutés
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10">
        {dataObjects.slice(-6).map((objet, _) => (
          <ObjectCard
            key={objet.id}
            id={objet.id}
            name={objet.name}
            image={objet.image}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Link to="/objects">
          <button
            type="button"
            className="relative text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-lg px-8 py-2 text-center me-2 mb-2 mt-6"
          >
            Tous les objets
          </button>
        </Link>
      </div>
      <CollectionCTA />
      <h2 className="font-bold text-2xl text-customred mt-10">
        Les catégories phares
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10">
        {dataCategories.slice(-6).map((category, _) => (
          <ObjectCard
            key={category.id}
            id={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <Link to="/categories">
          <button
            type="button"
            className="relative text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-lg px-8 py-2 text-center me-2 mb-2 mt-6"
          >
            Toutes les catégories
          </button>
        </Link>
      </div>
    </div>
  );
}

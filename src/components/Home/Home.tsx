import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Background from '../Background/Background';
import CarrouselHome from '../Carrousel/CarrouselHome';
import CollectionCTA from '../Collection/CollectionCTA';
import ObjectCard from '../Object/ObjectCard';
import { randomCollection } from '../../store/reducers/collectionsReducer';
import { fetchObjects } from '../../store/reducers/objectsReducer';
import { fetchCategories } from '../../store/reducers/categoriesReducer';

export default function Home() {
  const dispatch = useAppDispatch();
  const dataObjects = useAppSelector((state) => state.objects.list);
  const dataCategories = useAppSelector((state) => state.categories.list);
  const dataRandomCollections = useAppSelector(
    (state) => state.collections.randomCollection
  );

  useEffect(() => {
    dispatch(fetchObjects());
    dispatch(fetchCategories());
    dispatch(randomCollection());
  }, []);
  return (
    <div>
      {/* banner */}
      <h1 className="md:h-20 p-5 text-center text-2xl font-bold text-white bg-gradient-to-r from-customred to-customorange ">
        Chaque objet a son histoire, et chaque collection raconte votre parcours
        !
      </h1>
      <div className="relative">
        <Background />
      </div>
      <h2 className="font-bold text-2xl text-customred mt-10">
        Collections au hasard
      </h2>
      <CarrouselHome collections={dataRandomCollections} />
      <div className="flex justify-center md:justify-end mb-9">
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
        Derniers objets ajoutés
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
      <div className="flex justify-center md:justify-end mb-9">
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
      <h2 className="font-bold text-2xl text-customred mt-10">Catégories</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10">
        {dataCategories && dataCategories.slice(-6).map((category, _) => (
          <ObjectCard
            key={category.id}
            id={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
      <div className="flex justify-center md:justify-end mb-9">
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

import Background from '../Background/Background';
import CarrouselHome from '../Carrousel/CarrouselHome';
import CollectionCTA from '../Collection/CollectionCTA';
import ObjectCard from '../Object/ObjectCard';

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      {/* bandeau */}
      <h1 className="md:h-20 w-screen p-5 text-center text-2xl font-semibold text-white bg-gradient-to-r from-customred to-customorange">
        Chaque objet a son histoire, et chaque collection raconte votre parcours
        !
      </h1>
      <div className="relative">
        <Background />
      </div>
      <h2 className="font-bold text-2xl text-customred mt-10">
        Collection à la une
      </h2>
      <CarrouselHome />
      <div className="flex justify-end">
        <button
          type="button"
          className="relative text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-lg px-8 py-2 text-center me-2 mb-2"
        >
          Toutes les collections
        </button>
      </div>
      <h2 className="font-bold text-2xl text-customred mt-10">
        Les derniers objets ajoutés
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10">
        {[...Array(6)].map((_, index) => (
          <ObjectCard
            key={index}
            id={index}
            name="object"
            image="https://picsum.photos/1000"
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="relative text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-lg px-8 py-2 text-center me-2 mb-2 mt-6"
        >
          Tous les objets
        </button>
      </div>
      <CollectionCTA />
      <h2 className="font-bold text-2xl text-customred mt-10">
        Les catégories phares
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-10">
        {[...Array(6)].map((_, index) => (
          <ObjectCard
            key={index}
            id={index}
            name="category"
            image="https://picsum.photos/1000"
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="relative text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-lg px-8 py-2 text-center me-2 mb-2 mt-6"
        >
          Toutes les catégories
        </button>
      </div>
    </div>
  );
}

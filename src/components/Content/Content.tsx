import kevin from '../../assets/kevin.jpeg';
import andy from '../../assets/andy.jpeg';
import adrien from '../../assets/adrien.jpeg';
import christian from '../../assets/christian.jpeg';

export default function Content() {
  return (
    <div className="text-justify my-8">
      <h1 className="text-xl text-center font-bold uppercase mb-6 text-customred">
        Mentions légales et conditions générales d'utilisation
      </h1>
      {/* border */}
      <div className="border mb-6" />
      <div className="ml-8 w-4/5">
        <h2 className="font-bold uppercase">Article 1 - objet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
        <h2 className="font-bold uppercase mt-8">
          Article 2 - Mentions légales
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
        <h2 className="font-bold uppercase mt-8">Article 3 - Accès au site</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
        <h2 className="font-bold uppercase mt-8">
          Article 4 - Collecte des données
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
        <h2 className="font-bold uppercase mt-8">
          Article 5 - Propriété intellectuelle
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mt-10">
        <input type="checkbox" />
        <div className="collapse-title text-center text-xl font-bold opacity-60">
          Créateurs du site
        </div>
        <div className="collapse-content grid md:grid-cols-4 grid-cols-2 gap-6 text-2xl font-bold text-center text-customred">
          <div>
            <img className="rounded-tr-3xl rounded-bl-3xl" src={kevin} alt="" />
            <p>Kévin</p>
          </div>
          <div>
            <img className="rounded-tr-3xl rounded-bl-3xl" src={andy} alt="" />
            <p>Andy</p>
          </div>
          <div>
            <img
              className="rounded-tr-3xl rounded-bl-3xl"
              src={adrien}
              alt=""
            />
            <p>Adrien</p>
          </div>
          <div>
            <img
              className="rounded-tr-3xl rounded-bl-3xl"
              src={christian}
              alt=""
            />
            <p>Christian</p>
          </div>
        </div>
      </div>
    </div>
  );
}

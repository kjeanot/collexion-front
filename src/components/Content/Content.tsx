type Props = {};

export default function Content({}: Props) {
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
        <h2 className="font-bold uppercase mt-4">
          Article 2 - Mentions légales
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
        <h2 className="font-bold uppercase mt-4">Article 3 - Accès au site</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
        <h2 className="font-bold uppercase mt-4">
          Article 4 - Collecte des données
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
        <h2 className="font-bold uppercase mt-4">
          Article 5 - Propriété intellectuelle
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          officia eaque sed commodi blanditiis fuga facilis, harum a dignissimos
          consequatur voluptatem molestiae aliquam aut totam, tempore laborum
          laboriosam magni? Minima.
        </p>
      </div>
    </div>
  );
}

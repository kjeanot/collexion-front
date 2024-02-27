export default function Filter() {
  return (
    <div className="relative mt-8 mr-2">
      <select className="select select-bordered w-28 max-w-xs">
        <option disabled selected>
          Trier par :
        </option>
        <option>Pertinence</option>
        <option>Date d'ajout</option>
        <option>Ordre alphabétique</option>
      </select>
    </div>
  );
}

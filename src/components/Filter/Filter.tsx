export default function Filter() {
  return (
    <div className="relative mt-8 mr-2">
      <select className="select select-bordered w-28 max-w-xs">
        <option disabled selected>
          Trier par :
        </option>
        <option>Date</option>
        <option>Note</option>
      </select>
    </div>
  );
}

import avatar from '../../assets/avatar-generations_bssq.jpg';

type Props = {};

export default function Comment({}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
      <div className="p-6 mb-6">
        <h2 className="text-2xl font-semibold">Commentaires</h2>
        {/* border */}
        <div className="border mt-6" />
        {/* <div className="bg-gray-100 h-52" /> */}
        <div className="card w-72 border mt-6 bg-gray-100">
          <div className="card-body">
            <div className="flex">
              <img
                className="w-10 h-10 ml-2 mr-2 rounded-full"
                src={avatar}
                alt=""
              />
              <h2 className="card-title">Jese Leos</h2>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div className="p-6 mb-6 bg-gray-100">
        <h2 className="text-2xl font-semibold">Laisser un commentaire</h2>
        {/* border */}
        <div className="border mt-6" />
        {/* form */}
        <textarea
          className="textarea textarea-bordered w-full mt-6"
          placeholder="Commentaire"
        />
        <button
          type="button"
          className="flex justify-end text-white bg-gradient-to-r from-customred to-customorange hover:bg-gradient-to-br font-semibold rounded-lg text-base px-3 py-2 text-center mt-6 me-2 mb-2"
        >
          Envoyer votre commentaire
        </button>
      </div>
    </div>
  );
}

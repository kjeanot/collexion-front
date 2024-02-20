type Props = {
  value: number | null | undefined;
};

export default function Rating({ value }: Props) {
  return (
    <div className="h-fit flex">
      {
        // Adding stars depending on the collection rating value
        value != null && value > 0 ? (
          // Creating an array from the collection rating value to be able to map it and generate stars
          [...Array(value)].map((_, index) => (
            <svg
              key={index}
              className="w-3 h-3 text-customorange"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))
        ) : (
          <p className="text-gray-400">Pas encore notée</p>
        )
      }
    </div>
  );
}

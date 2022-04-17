//a component that returns play icon for music collections
const PlayCollection = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 58 58"
      enableBackground="new 0 0 58 58"
      xmlSpace="preserve"
      width={40}
      height={40}
      className="cursor-pointer"
    >
      <circle fill="#80da37" cx="29" cy="29" r="29" />
      <g>
        <polygon fill="#FFF" points="44,29 22,44 22,29.273 22,14" />
        <path
          fill="#FFFFFF"
          d="M22,45c-0.16,0-0.321-0.038-0.467-0.116C21.205,44.711,21,44.371,21,44V14
      c0-0.371,0.205-0.711,0.533-0.884c0.328-0.174,0.724-0.15,1.031,0.058l22,15C44.836,28.36,45,28.669,45,29s-0.164,0.64-0.437,0.826
      l-22,15C22.394,44.941,22.197,45,22,45z M23,15.893v26.215L42.225,29L23,15.893z"
        />
      </g>
    </svg>
  );
};

export default PlayCollection;

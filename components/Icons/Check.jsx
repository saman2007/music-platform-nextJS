const Check = () => {
  return (
    <svg
      class="ft-green-tick"
      xmlns="http://www.w3.org/2000/svg"
      height="100"
      width="100"
      viewBox="0 0 48 48"
      aria-hidden="true"
      className="max-h-[25px] min-h-[25px] max-w-[40px] min-w-[40px]"
    >
      <circle class="circle" fill="#1db854" cx="24" cy="24" r="22" />
      <path
        class="tick"
        fill="none"
        stroke="#FFF"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        d="M14 27l5.917 4.917L34 17"
      />
    </svg>
  );
};

export default Check;

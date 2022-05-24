const Loading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 10 10"
      enable-background="new 0 0 0 0"
      xmlSpace="preserve"
      class="min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px]"
    >
      <circle fill="#1db854" stroke="none" cx="2" cy="5" r="0.8">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        ></animate>
      </circle>
      <circle fill="#1db854" stroke="none" cx="5" cy="5" r="0.8">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        ></animate>
      </circle>
      <circle fill="#1db854" stroke="none" cx="8" cy="5" r="0.8">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        ></animate>
      </circle>
    </svg>
  );
};

export default Loading;

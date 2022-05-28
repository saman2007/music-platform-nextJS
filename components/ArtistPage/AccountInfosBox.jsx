import AccountBio from "./AccountBio";

function getShortNumber(number) {
  return (number / 1000).toFixed(1) + "K";
}

const AccountInfosBox = (props) => {
  return (
    <div className="bg-[#1a1a1a] border border-solid border-[#2d2d2d] p-[5px] rounded-[20px] w-full sm:w-[unset] sm:max-w-[400px] min-h-[200px]">
      <div className="w-full flex justify-center mb-[15px]">
        <div className="border-r border-solid border-[#2d2d2d] pr-[10px]">
          <p className="text-[#696969]">Fallowers</p>
          <p className="text-[#929292]">
            {props.fallowers >= 1000
              ? getShortNumber(props.fallowers)
              : props.fallowers}
          </p>
        </div>
        <div className="border-r border-solid border-[#2d2d2d] px-[10px]">
          <p className="text-[#696969]">Fallowing</p>
          <p className="text-[#929292]">
            {props.fallowing >= 1000
              ? getShortNumber(props.fallowing)
              : props.fallowing}
          </p>
        </div>
        <div className="pl-[10px]">
          <p className="text-[#696969]">Tracks</p>
          <p className="text-[#929292]">
            {props.tracks >= 1000 ? getShortNumber(props.tracks) : props.tracks}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mb-[30px]">
        <p className="text-[#696969]">Monthly Plays</p>
        <p className="text-[#929292]">
          {props.monthly_plays >= 1000
            ? getShortNumber(props.monthly_plays)
            : props.monthly_plays}
        </p>
      </div>
      <AccountBio bio={props.bio} />
    </div>
  );
};

export default AccountInfosBox;

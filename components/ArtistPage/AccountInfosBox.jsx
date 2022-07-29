import AccountBio from "./AccountBio";

function getShortNumber(number) {
  return (number / 1000).toFixed(1) + "K";
}

const AccountInfosBox = (props) => {
  return (
    <div className="dark:bg-[#1a1a1a] bg-[#cfcfcfb2] border-2 border-solid dark:border-[#2d2d2d] border-[#1db854] p-[5px] rounded-[20px] w-full sm:w-[unset] sm:max-w-[400px] min-h-[200px]">
      <div className="w-full flex justify-center mb-[15px]">
        <div className="border-r border-solid border-[#2d2d2d] pr-[10px]">
          <p className="dark:text-[#696969] text-[#000]">Fallowers</p>
          <p className="dark:text-[#929292] text-[#464646]">
            {props.fallowers >= 1000
              ? getShortNumber(props.fallowers)
              : props.fallowers}
          </p>
        </div>
        <div className="border-r border-solid border-[#2d2d2d] px-[10px]">
          <p className="dark:text-[#696969] text-[#000]">Fallowing</p>
          <p className="dark:text-[#929292] text-[#464646]">
            {props.fallowing >= 1000
              ? getShortNumber(props.fallowing)
              : props.fallowing}
          </p>
        </div>
        <div className="pl-[10px]">
          <p className="dark:text-[#696969] text-[#000]">Tracks</p>
          <p className="dark:text-[#929292] text-[#464646]">
            {props.tracks >= 1000 ? getShortNumber(props.tracks) : props.tracks}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mb-[30px]">
        <p className="dark:text-[#696969] text-[#000]">Monthly Plays</p>
        <p className="dark:text-[#929292] text-[#464646]">
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

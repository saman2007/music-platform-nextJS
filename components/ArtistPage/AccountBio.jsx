import InstagramIcon from "../Icons/InstagramIcon";

const AccountBio = (props) => {
  const infos = [];

  for (const key in props.bio) {
    let icon = null;

    if (key === "instagram") icon = <InstagramIcon />;

    if (key !== "info") {
      infos.push(
        <a
          href={props.bio[key]}
          className="flex items-center gap-x-[5px] w-fit text-[#929292] hover:text-[#727272]"
          key={key}
        >
          {icon}
          <span>instagram</span>
        </a>
      );
    } else {
      infos.push(<span key={key} className="mb-[20px] inline-block text-[#929292]">{props.bio[key]}</span>);
    }
  }

  return <div className="flex flex-col">{infos}</div>;
};

export default AccountBio;

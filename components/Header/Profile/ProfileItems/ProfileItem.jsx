import Link from "next/link";

/**
 * ProfileItem
 * * each items in profile popup
 * @prop text: text of a profile item
 * @prop Icon: an SVG icon component
 * @prop path: a path for a profile item to navigate user
 */
const ProfileItem = ({ text, Icon, path }) => {
  return (
    <li className="w-full border-b-2 border-b-[#199946] border-solid last:border-b-0">
      <Link href={path}>
        <a className="w-full p-[5px] text-white bg-[#1db854] h-full flex justify-between items-center">
          <Icon className="w-[20px] h-[20px] fill-white" />
          {text}
        </a>
      </Link>
    </li>
  );
};

export default ProfileItem;

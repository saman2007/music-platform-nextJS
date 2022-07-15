import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import optinsItemsDatas from "../options-items.json";

const OptionsItems = () => {
  return (
    <ul className="w-full overflow-y-auto max-h-full flex flex-col ">
      <ThemeToggle />
      {optinsItemsDatas.map((data, index) => (
        <li className="min-h-[35px] cursor-pointer" key={index}>
          <Link href={data.href}>
            <a
              className="flex justify-center items-center min-h-[35px]"
              style={data.styles}
            >
              {data.text}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OptionsItems;

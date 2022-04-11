import Image from "next/image";
import logo_svg from "../../public/logo.svg";

//a component to display spotify logo
const Logo = () => {
  return (
    <div className="mb-[13px] w-[34px] h-[34px] cursor-pointer">
      <Image src={logo_svg} alt="logo" />
    </div>
  );
};

export default Logo;

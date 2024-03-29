import Image from "next/image";

const BackCover = (props) => {
  return (
    <div className="relative w-full h-[200px] rounded-[20px] flex items-center mb-[10px]">
      <div className="absolute w-full h-full">
        <Image
          alt="artist-page-bg"
          src={props.cover || "/default-cover.jpg"}
          layout="fill"
          objectFit="cover"
          className="rounded-[20px]"
        />
      </div>
      <div className="h-full w-full flex items-center px-[15px] py-[5px]">
        <div className="relative w-[130px] h-[130px] rounded-[10px] z-[2]">
          <Image
            layout="fill"
            objectFit="cover"
            src={props.profile || "/default-profile.jpg"}
            alt="artist-profile"
            className="rounded-[10px]"
          />
        </div>

        <div className="flex-grow ml-[20px] z-[2]">
          <h1 className="text-[25px] font-semibold leading-[30px] w-fit p-[3px] rounded-[10px] mb-[10px] bg-[#cfcfcfb2] dark:bg-[#161616c4] dark:text-white text-black">
            {props.name}
          </h1>
          <p className="text-[19px] bg-[#cfcfcfb2] dark:bg-[#161616c4] w-fit p-[3px] rounded-[10px] dark:text-white text-black">
            {props.username}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackCover;

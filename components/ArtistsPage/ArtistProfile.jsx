import Image from "next/image";

const ArtistProfile = ({ src, alt }) => {
  return (
    <div className="relative w-[60px] h-[60px] flex-shrink-0 sm:w-[100px] sm:h-[100px] ">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-[10px]" />
    </div>
  );
};

export default ArtistProfile;

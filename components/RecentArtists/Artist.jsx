import Link from "next/link";
import Image from "next/image";

const Artist = (props) => {
  const { background, color, page, radius } = props;

  return (
    <div
      className="w-[96px] h-[95px] bg-contain bg-no-repeat"
      style={{
        backgroundColor: color,
        borderRadius: radius,
      }}
    >
      <Link href={page} prefetch={false}>
        <a className="w-full h-full inline-block relative rounded-">
          <Image alt="artist-image" src={background} objectFit="contain" layout="fill" style={{borderRadius: radius}} />
        </a>
      </Link>
    </div>
  );
};

export default Artist;

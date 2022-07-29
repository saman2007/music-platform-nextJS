import Link from "next/link";
import ArtistInfos from "./ArtistInfos";
import ArtistProfile from "./ArtistProfile";

const Artist = ({ src, alt, musicsNumber, monthlyListens, name }) => {
  return (
    <div className="min-h-[100px] w-[95%] sm:w-[85%] p-[10px] rounded-[10px] border border-solid dark:border-[#1e1e1e] border-[#1db854] dark:bg-[#0d0d0d] bg-[#cfcfcf]">
      <Link href={`/artists/${name}`}>
        <a className="w-full h-full flex items-center">
          <ArtistProfile src={src} alt={alt} />
          <ArtistInfos
            monthlyListens={monthlyListens}
            musicsNumber={musicsNumber}
            name={name}
          />
        </a>
      </Link>
    </div>
  );
};

export default Artist;

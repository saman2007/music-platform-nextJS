import Genres from "../components/Genres/Genres";
import MusicCollection from "../components/MusicCollectionCard/MusicCollection";
import MusicList from "../components/MusicList/MusicList";
import RecentArtists from "../components/RecentArtists/RecentArtists";
import { supabase } from "./_app";

const genres = [
  "Classic",
  "House",
  "Minimal",
  "Hip-Hop",
  "Electronic",
  "Chill",
];

const artists = [
  {
    background: "./eminem.png",
    color: "#f50f0d",
    page: "/artist/eminem",
    radius: "10px 5px 5px 5px",
    id: "1",
  },
  {
    background: "./drake.png",
    color: "#d6b026",
    page: "/artist/drake",
    radius: "5px 10px 5px 5px",
    id: "2",
  },
  {
    background: "./tentasion.png",
    color: "#ffb05f",
    page: "/artist/tentasion",
    radius: "5px 5px 5px 10px",
    id: "3",
  },
  {
    background: "./2-pac.png",
    color: "#008b9a",
    page: "/artist/2-pac",
    radius: "5px 5px 10px 5px",
    id: "4",
  },
];

export default function Home(props) {
  return (
    <div className="row-start-2 row-end-[12] col-start-2 col-end-13 px-[15px] overflow-y-auto">
      <div className="w-full p-[5px] overflow-x-auto flex flex-row gap-[15px] mb-[40px]">
        {props.playlists.map((data) => (
          <MusicCollection
            key={data.id}
            bgImg={data.cover}
            color={data.color}
            trackNumbers={data.songs_number}
            title={data.name}
            description={data.description}
          />
        ))}
      </div>
      <div className="w-full flex gap-x-[20px] flex-col items-center md:flex-row md:items-start mb-[20px]">
        <Genres genres={genres} />
        <MusicList musics={props.musics} />
        <RecentArtists artists={artists} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data: musics } = await supabase.from("musics").select("*");
  let { data: playlists } = await supabase.from("playlists").select("*");

  return {
    props: {
      musics,
      playlists,
    },
    revalidate: 60,
  };
}

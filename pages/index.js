import Genres from "../components/Genres/Genres";
import MusicCollection from "../components/MusicCollectionCard/MusicCollection";
import MusicList from "../components/MusicList/MusicList";
import { supabase } from "./_app";

//music collections infos
const CollectionsInfos = [
  {
    id: "1",
    bgImg: "/coll-cover-1",
    color: "purple",
    trackNumbers: "17",
    title: "liked songs",
    description: "your liked musics are here!",
  },
  {
    id: "2",
    bgImg: "/coll-cover-2",
    color: "blue",
    trackNumbers: "14",
    title: "new songs",
    description: "listen to newest songs!",
  },
  {
    id: "3",
    bgImg: "/coll-cover-3",
    color: "orange",
    trackNumbers: "10",
    title: "your favorite artists",
    description: "listen to your favorit artists songs!",
  },
  {
    id: "4",
    bgImg: "/coll-cover-4",
    color: "light orange",
    trackNumbers: "20",
    title: "top rap songs",
    description: "listen to top rap musics!",
  },
];

const genres = [
  "Classic",
  "House",
  "Minimal",
  "Hip-Hop",
  "Electronic",
  "Chill",
];

const musics = [
  {
    cover: "./safir-tafrigh.jpg",
    singer: "safir",
    name: "lalai",
    listenTimes: "120k",
    like: false,
    isPlaying: false,
  },
  {
    cover: "./bamdad-block.jpg",
    singer: "bamdad",
    name: "block",
    listenTimes: "70k",
    like: true,
    isPlaying: true,
  },
  {
    cover: "./bamdad-block.jpg",
    singer: "bamdad",
    name: "block",
    listenTimes: "70k",
    like: true,
    isPlaying: true,
  },
  {
    cover: "./bamdad-block.jpg",
    singer: "bamdad",
    name: "block",
    listenTimes: "70k",
    like: true,
    isPlaying: true,
  },
];

export default function Home(props) {
  return (
    <div className="row-start-2 row-end-[13] col-start-2 col-end-13 px-[15px] overflow-y-auto">
      <div className="w-full p-[5px] overflow-x-auto flex flex-row gap-[15px] mb-[40px]">
        {CollectionsInfos.map((data) => (
          <MusicCollection
            key={data.id}
            bgImg={data.bgImg}
            color={data.color}
            trackNumbers={data.trackNumbers}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      <div className="w-full flex gap-x-[20px] flex-col items-center md:flex-row">
        <Genres genres={genres} />
        <MusicList musics={props.musics} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data: musics, error } = await supabase.from("musics").select("*");

  return {
    props: {
      musics,
    },
  };
}

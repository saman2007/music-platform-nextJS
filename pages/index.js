import { useSelector } from "react-redux";
import Genres from "../components/Genres/Genres";
import MusicCollection from "../components/MusicCollectionCard/MusicCollection";
import MusicList from "../components/MusicList/MusicList";
import Layout from "../components/PagesLayout/Layout";
import RecentArtists from "../components/RecentArtists/RecentArtists";
import { supabase } from "./_app";
import Head from "next/head";

const artists = [
  {
    background: "/eminem.png",
    color: "#f50f0d",
    page: "/artist/eminem",
    radius: "10px 5px 5px 5px",
    id: "1",
  },
  {
    background: "/drake.png",
    color: "#d6b026",
    page: "/artist/drake",
    radius: "5px 10px 5px 5px",
    id: "2",
  },
  {
    background: "/tentasion.png",
    color: "#ffb05f",
    page: "/artist/tentasion",
    radius: "5px 5px 5px 10px",
    id: "3",
  },
  {
    background: "/2-pac.png",
    color: "#008b9a",
    page: "/artist/2-pac",
    radius: "5px 5px 10px 5px",
    id: "4",
  },
];

export default function Home(props) {
  const filters = useSelector((store) => store.filters.genres);
  const genres = useSelector((store) => store.filters.allGenres);

  const filteredMusics = props.musics.filter((music) =>
    music.genres.some((r) =>
      filters.includes("all genres") ? true : filters.includes(r)
    )
  );

  return (
    <Layout>
      <Head>
        <title>spotify redesign</title>
        <meta
          name="description"
          content="the best and most popular music platform in the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full p-[5px] overflow-x-auto flex flex-row gap-[15px] mb-[40px]">
        {props.playlists.map((data) => (
          <MusicCollection
            key={data.id}
            bgImg={data.cover}
            color={data.color}
            trackNumbers={data.songs_number}
            title={data.name}
            description={data.description}
            playlistId={data.id}
          />
        ))}
      </div>
      <div className="w-full flex gap-x-[20px] flex-col items-center md:flex-row md:items-start mb-[20px]">
        <Genres genres={genres} />
        <MusicList
          musics={filteredMusics}
          playlistId={5}
          title={"Tracks of the Week"}
        />
        <RecentArtists artists={artists} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  //get all the musics with a playlist array that contains 5
  const { data: musics } = await supabase
    .from("musics")
    .select("*")
    .contains("playlists", ["5"]);

  //get all the playlists data with isFeature equal to true
  let { data: playlists } = await supabase
    .from("playlists")
    .select("*")
    .eq("isFeature", true);

  return {
    props: {
      musics,
      playlists,
    },
    revalidate: 60,
  };
}

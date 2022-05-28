import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountInfosBox from "../../../components/ArtistPage/AccountInfosBox";
import BackCover from "../../../components/ArtistPage/BackCover";
import MusicList from "../../../components/MusicList/MusicList";
import notificationActions from "../../../store/NotificatinSlice";
import { supabase } from "../../_app";

const Artist = (props) => {
  const isInitialized = useSelector((state) => state.music.isInitialized);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    //if the page is in fallback mode, display loading notification
    if (router.isFallback) {
      dispatch(
        notificationActions.setSituation({
          type: "loading",
          text: "getting artists datas...",
        })
      );
      //else, remove the notification
    }
  }, [router.isFallback]);

  //if the page doesnt have error and it is not on fallback mode, display the artist datas
  if (!router.isFallback) {
    return (
      <div
        className={`col-start-2 col-end-13 row-start-2 px-[4px] overflow-y-auto ${
          isInitialized ? "row-end-[12]" : "row-end-[13]"
        }`}
      >
        <BackCover
          username={props.artist.username}
          name={props.artist.name}
          profile={props.artist.profile}
          cover={props.artist.cover}
        />
        <div className="flex gap-y-[10px] sm:gap-y-[0] sm:gap-x-[10px] sm:flex-row flex-col">
          <AccountInfosBox
            fallowers={props.artist.fallowers}
            fallowing={props.artist.fallowing}
            tracks={props.artist.tracks}
            monthly_plays={props.artist.monthly_plays}
            bio={props.artist.bio}
          />
          <MusicList musics={props.musics} playlistId={-1} />
        </div>
      </div>
    );
  }
};

export async function getStaticPaths() {
  let { data: artists } = await supabase.from("artists").select("name");

  const paths = artists.map((data) => ({ params: { artist: data.name } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let { data: artist } = await supabase
    .from("artists")
    .select("*")
    .eq("name", params.artist);

  if (artist.length === 0)
    return {
      props: {
        hasError: true,
      },
      notFound: true,
    };

  let { data: artistsMusics } = await supabase
    .from("musics")
    .select("*")
    .or(artist[0].musics.map((data) => `id.eq.${data}`).join(","));

  return {
    props: { artist: artist[0], musics: artistsMusics },
    revalidate: 60,
  };
}

export default Artist;

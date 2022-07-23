import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ErrorModal from "../../../../components/ErrorModal/ErrorModal";
import Comments from "../../../../components/MusicPage/Comments/Comments";
import MusicInfosContainer from "../../../../components/MusicPage/MusicInfosContainer";
import useInitialized from "../../../../hooks/useInitialized";
import { commentsActions } from "../../../../store/CommentsSlice";
import { supabase } from "../../../_app";

const MusicPage = (props) => {
  const { music } = props;
  const initClass = useInitialized();
  const dispatch = useDispatch();

  //when user enter a music page, first clear the comments
  useEffect(() => {
    dispatch(commentsActions.clearComments());
  }, []);

  //if props has error property, display error modal
  if (props.error) {
    return (
      <ErrorModal error={"something went wrong!"} code={props.error.code} />
    );
  }

  return (
    <div
      className={`col-start-2 col-end-13 row-start-2 px-[4px] overflow-y-auto content-container ${initClass}`}
    >
      <MusicInfosContainer music={music} />
      <Comments singer={music.singer} name={music.name} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  //creating the filters
  const name =
    params.music.length === 1
      ? params.music[0]
      : params.music.length === 2
      ? params.music[1]
      : false;

  const album =
    params.music.length === 1
      ? null
      : params.music.length === 2
      ? params.music[0]
      : null;

  //if name is false, display the notfound modal
  if (!name) return { notFound: true };

  //creating the filters object
  const filter = { singer: params.artist, name };
  //if album is not null, add it to filters object
  if (album) filter.album = album;

  //get the music datas base on the filters
  const { data: music, error } = await supabase
    .from("musics")
    .select("*")
    .match(filter);

  //if it has error, display error modal
  if (error) {
    return {
      props: {
        error,
      },
    };
  }

  //if music array is empty or null, display notfound modal
  if (music?.length === 0 || !music) return { notFound: true };

  return {
    props: { music: music[0] },
  };
}

export default MusicPage;

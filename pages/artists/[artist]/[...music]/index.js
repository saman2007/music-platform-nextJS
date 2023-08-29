import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ErrorModal from "../../../../components/ErrorModal/ErrorModal";
import Comments from "../../../../components/MusicPage/Comments/Comments";
import MusicInfosContainer from "../../../../components/MusicPage/MusicInfosContainer";
import Layout from "../../../../components/PagesLayout/Layout";
import useInitialized from "../../../../hooks/useInitialized";
import { commentsActions } from "../../../../store/CommentsSlice";
import { supabase } from "../../../_app";

const MusicPage = (props) => {
  const { music } = props;
  const dispatch = useDispatch();

  //when user enter a music page, first clear the comments
  useEffect(() => {
    dispatch(commentsActions.clearComments());
  }, []);

  //if props has error property, display error modal
  if (props.error) {
    return (
      <>
        <Head>
          <title>ERROR 500!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ErrorModal error={"something went wrong!"} code={props.error.code} />
      </>
    );
  }

  return (
    <Layout classes={"!px-[4px]"}>
      <Head>
        <title>spotify redesign</title>
        <meta
          name={`${music.name} from ${music.singer}`}
          content="the best and most popular music platform in the world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MusicInfosContainer music={music} />
      <Comments singer={music.singer} name={music.name} />
    </Layout>
  );
};

export async function getServerSideProps({ params, resolvedUrl }) {
  //creating the filters
  const name =
    params.music.length === 1
      ? params.music[0]
      : params.music.length === 2
      ? params.music[1]
      : false;

  //if name is false, display the notfound modal
  if (!name) return { notFound: true };

  const queryParamLocation = resolvedUrl.indexOf("?");

  //creating the filters object
  const filter = {
    musicPage: resolvedUrl.slice(
      0,
      queryParamLocation > -1 ? queryParamLocation : undefined
    ),
  };

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

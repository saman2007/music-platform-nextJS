import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MusicList from "../components/MusicList/MusicList";
import Layout from "../components/PagesLayout/Layout";
import useFavoriteMusicsValue from "../hooks/useFavoriteMusicsValue";
import favoriteMusicsAc from "../store/FavoriteMusics";
import notificationAc from "../store/NotificatinSlice";
import { supabase } from "./_app";

const FavoriteMusics = () => {
  const { musics, isInited } = useFavoriteMusicsValue();
  const dispatch = useDispatch();

  useEffect(() => {
    //only if musics state is not empty and it is ready to use, get the newest datas of favorite musics
    if (musics.length !== 0 && isInited) {
      const getNewestData = async () => {
        //display the loading notification
        dispatch(
          notificationAc.setSituation({
            type: "loading",
            text: "getting the newest favorite musics data...",
          })
        );

        let filters = "";
        //create filters
        musics.forEach((data) => {
          filters += `${filters ? "," : ""}id.eq.${data.id}`;
        });

        //get the newest datas from api with the created filters
        const { data, error } = await supabase
          .from("musics")
          .select("*")
          .or(filters);

        //if there is no error, display the success notification, else display the error notification
        if (data) {
          dispatch(
            notificationAc.setSituation({
              type: "success",
              text: "your favorite musics are up to date!",
            })
          );
        } else if (error) {
          dispatch(
            notificationAc.setSituation({
              type: "error",
              text: "failed to load playlist. please try again.",
            })
          );
        }

        //if the newest datas are not equal to old datas, update the old datas
        if (JSON.stringify(data) !== JSON.stringify(musics) && !error) {
          dispatch(favoriteMusicsAc.replaceLSDatas(data));
        }

        //remove the displaying notification after 3 seconds
        setTimeout(() => {
          dispatch(notificationAc.removeSituation());
        }, 3000);
      };

      getNewestData();
    }
  }, [isInited]);

  return (
    <Layout classes={"flex justify-center items-center"}>
      {isInited &&
        (musics.length !== 0 ? (
          <div className="w-full sm:w-[500px] md:w-[700px] h-full pt-[50px]">
            <MusicList
              musics={musics}
              playlistId={5}
              title={"Your favorite musics"}
            />
          </div>
        ) : musics.length === 0 ? (
          <h1 className="text-[25px] text-black dark:text-white font-bold">No data is here!</h1>
        ) : (
          ""
        ))}
    </Layout>
  );
};

export default FavoriteMusics;

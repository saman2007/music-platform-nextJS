import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MusicList from "../components/MusicList/MusicList";
import useRecentMusicsValue from "../hooks/useRecentMusicsValue";
import notificationAc from "../store/NotificatinSlice";
import recentMusicsAc from "../store/RecentMusicsSlice";
import { supabase } from "./_app";
import { getUpdatedState } from "../helpers/helpers";
import Layout from "../components/PagesLayout/Layout";

const recentMusicsPage = () => {
  const { musics, isInited } = useRecentMusicsValue();
  const dispatch = useDispatch();

  useEffect(() => {
    //only if musics state is not empty and it is ready to use, get the newest datas of recent musics
    if (musics.length !== 0 && isInited) {
      const getNewestData = async () => {
        //display the loading notification
        dispatch(
          notificationAc.setSituation({
            type: "loading",
            text: "getting the newest recent musics data...",
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
              text: "your recent musics are up to date!",
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
          dispatch(
            recentMusicsAc.replaceLSDatas(getUpdatedState(musics, data))
          );
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
              history
              musics={musics}
              playlistId={5}
              title={"your recent musics"}
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

export default recentMusicsPage;

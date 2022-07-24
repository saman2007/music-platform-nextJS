import Layout from "../../components/PagesLayout/Layout";
import Artists from "../../components/ArtistsPage/Artists";
import { supabase } from "../_app";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

const ArtistsPage = ({ data, error }) => {
  if (error) {
    return <ErrorModal error={"something went wrong"} />;
  }

  return (
    <Layout>
      <div className="w-full flex justify-center items-center my-[30px]">
        <h1 className="text-[23px] font-bold text-white text-center">
          All the artists that are in this app are here!
        </h1>
      </div>
      <Artists artists={data} />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const { data, error } = await supabase
    .from("artists")
    .select("id,profile,name,tracks,monthly_plays");

  if (error) {
    return {
      props: { error },
    };
  }

  return { props: { data } };
};

export default ArtistsPage;

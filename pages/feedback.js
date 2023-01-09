import Head from "next/head";
import FeedbackForm from "../components/FeedBackPage/FeedbackForm";
import Layout from "../components/PagesLayout/Layout";

const Feedback = () => {
  return (
    <Layout classes="flex justify-center items-center">
      <Head>
        <title>feedback</title>
        <meta
          name="description"
          content="feedback page for persons who want to make my works better!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FeedbackForm />
    </Layout>
  );
};

export default Feedback;

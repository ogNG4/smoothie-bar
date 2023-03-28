import Head from "next/head";

import { getSmoothies } from "utils/getSmoothies";


import SmoothiesList from "@/smoothies/smoothies-list/SmoothiesList";

export default function HomePage({ smoothies }) {

  return (
    <>
      <Head>
        <title>Smoothie Bar</title>
        <meta
          name="description"
          content="Find a lot great smoothie recipes or create your own!"
        />
      </Head>
      <SmoothiesList smoothies={smoothies}  />
    </>
  );
}

export async function getServerSideProps() {
  const { data, error } = await getSmoothies("created_at"); 
  if (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
  return {
    props: {
      smoothies: data,
    
    },
  };
}
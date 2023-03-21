import Head from "next/head";

import UpdateSmoothie from "../components/smoothies/forms/UpdateSmoothie";
function SmoothieUpdatePage(){

    return(
        <>
        <Head>
          <title>Update Smoothie</title>
          <meta  name="description" content="Update your smoothie!"/>
        </Head>
        <UpdateSmoothie />
      </>
    )
   
}

export default SmoothieUpdatePage;
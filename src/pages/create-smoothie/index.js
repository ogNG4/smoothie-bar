import Head from "next/head";

import CreateSmoothie from "@/smoothies/forms/CreateSmoothie";
function CreateSmoothiePage() {
  return (
    <>
      <Head>
        <title>Create Smoothie</title>
        <meta  name="description" content="Create your delicoius smoothie!"/>
      </Head>
      <CreateSmoothie />
    </>
  );
}

export default CreateSmoothiePage;

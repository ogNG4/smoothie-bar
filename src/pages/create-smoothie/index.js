import Head from "next/head";

import { addSmoothie } from "utils/addSmoothie";
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


// export async function getServerSideProps(context) {
//   const { title, method, rating } = context.query;

//   let error = null;
//   if (!title || !method || !rating) {
//     error = "Please fill in all fields";
//   } else {
//     try {
//       await addSmoothie(title, method, rating);
//     } catch (e) {
//       error = e.message;
//     }
//   }

//   return {
//     props: {
//       error,
//     },
//   };
// }
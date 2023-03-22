import Head from "next/head";

import { supabase } from "../config/supabaseClient";
import { useState, useEffect } from "react";


import SmoothiesList from "@/smoothies/smoothies-list/SmoothiesList";
function HomePage() {
  //

  return (
    <>
      <Head>
        <title>Smoothie Bar</title>
        <meta  name="description" content="Find a lot great smoothe recipes or create your own!"/>
      </Head>
      <SmoothiesList />
    </>
  );
}

export default HomePage;

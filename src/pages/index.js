import Head from "next/head";

import { supabase } from "../config/supabaseClient";
import { useState, useEffect } from "react";

import SmoothieCard from "@/components/smoothies/smoothie-detail/SmoothieCard";
import SmoothiesList from "@/components/smoothies/smoothies-list/SmoothiesList";
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

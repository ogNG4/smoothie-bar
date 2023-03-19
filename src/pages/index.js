import { supabase } from "../config/supabaseClient";
import { useState, useEffect } from "react";

import SmoothieCard from "@/components/smoothies/smoothie-detail/SmoothieCard";
import SmoothiesList from "@/components/smoothies/smoothies-list/SmoothiesList";
function HomePage() {
  //

  return <SmoothiesList />;
}

export default HomePage;

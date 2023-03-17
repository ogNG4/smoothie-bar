import { supabase } from "../lib/supabaseClient";
import { useState, useEffect } from "react";

import SmoothieCard from "@/components/smoothies/SmoothieCard";
function HomePage() {
  const [error, setError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  const deleteHandler = (id) => {
    setSmoothies((prevSmoothies) => {
      return prevSmoothies.filter((smoothie) => smoothie.id !== id);
    });
  };

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select();
      if (error) {
        setError("Could not fetch smoothies");
        setSmoothies(null);
        console.log(error);
      }

      if (data) {
        setSmoothies(data);
        setError(null);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div className="smoothies-list">
      {smoothies &&
        smoothies.map((smoothie) => (
          <SmoothieCard
            key={smoothie.id}
            smoothie={smoothie}
            onDelete={deleteHandler}
          />
        ))}
    </div>
  );
}

export default HomePage;

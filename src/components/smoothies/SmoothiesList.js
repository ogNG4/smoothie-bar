import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";

import styles from './SmoothiesList.module.scss';

import SmoothieCard from "./SmoothieCard";
function SmoothiesList() {
    const [error, setError] = useState(null);
    const [smoothies, setSmoothies] = useState(null);
    const [orderBy, setOrderBy] = useState("created_at");
  
    const deleteHandler = (id) => {
      setSmoothies((prevSmoothies) => {
        return prevSmoothies.filter((smoothie) => smoothie.id !== id);
      });
    };
  
    useEffect(() => {
      const fetchSmoothies = async () => {
        const { data, error } = await supabase
          .from("smoothies")
          .select()
          .order(orderBy, { ascending: false });
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
    }, [orderBy]);
  
    return (
      <div className={styles.home}>
        <select
          name="sort"
          className={styles.select}
          onChange={(event) => setOrderBy(event.target.value)}
        >
          <option value="title">Title</option>
          <option value="rating">Rating</option>
          <option value="created_at">Date</option>
        </select>
  
        {error && <p className="error">{error}</p>}
        <div className={styles['smoothies-list']}>
          {smoothies &&
            smoothies.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={deleteHandler}
              />
            ))}
        </div>
      </div>
    );
}

export default SmoothiesList;
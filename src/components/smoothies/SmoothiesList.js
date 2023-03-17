import Select from "react-select";

import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";

import styles from "./SmoothiesList.module.scss";

import SmoothieCard from "./SmoothieCard";
function SmoothiesList() {
  const [error, setError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [filteredSmoothies, setFilteredSmoothies] = useState(null);

  const deleteHandler = (id) => {
    setSmoothies((prevSmoothies) => {
      return prevSmoothies.filter((smoothie) => smoothie.id !== id);
    });
  };

  const searchHandler = (event) => {
    const searchValue = event.target.value;
    if (searchValue.trim() === "") {
      setFilteredSmoothies(null);
      return;
    }

    const filtered = smoothies.filter((smoothie) =>
      smoothie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredSmoothies(filtered);
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
      <div className={styles["search-bar"]}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search"
          onChange={searchHandler}
        />
        <select
          name="sort"
          className={styles.select}
          onChange={(event) => setOrderBy(event.target.value)}
        >
          <option value="title">Title</option>
          <option value="rating">Rating</option>
          <option value="created_at">Date</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}
      <div className={styles["smoothies-list"]}>
        {filteredSmoothies && filteredSmoothies.length > 0
          ? filteredSmoothies.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={deleteHandler}
              />
            ))
          : smoothies.map((smoothie) => (
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

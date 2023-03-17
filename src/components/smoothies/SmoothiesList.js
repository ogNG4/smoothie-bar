import Select from "react-select";

import { supabase } from "../../lib/supabaseClient";
import { useState, useEffect } from "react";

import styles from "./SmoothiesList.module.scss";

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
      <Select
        options={[
          { value: "title", label: "Title" },
          { value: "rating", label: "Rating" },
          { value: "created_at", label: "Date" },
        ]}
        className={styles.select}
        onChange={(selectedOption) => setOrderBy(selectedOption.value)}
        styles={{
          control: (provided, state) => ({
            ...provided,
            boxShadow: state.isFocused
              ? "0 0 0 2px rgba(0, 0, 255, 0.5)"
              : "none",
          }),
        }}
      />

      {error && <p className="error">{error}</p>}
      <div className={styles["smoothies-list"]}>
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

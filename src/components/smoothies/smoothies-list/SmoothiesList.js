import { useState, useEffect } from "react";
import styles from "./SmoothiesList.module.scss";
import SmoothieCard from "../smoothie-detail/SmoothieCard";
import { getSmoothies } from "utils/getSmoothies";
import { deleteSmoothie } from "utils/deleteSmoothie";

function SmoothiesList(props) {
  const { smoothies: initialSmoothies } = props;
  const [error, setError] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");
  const [filteredSmoothies, setFilteredSmoothies] = useState(null);
  const [smoothies, setSmoothies] = useState(initialSmoothies);

  useEffect(() => {
    setSmoothies(initialSmoothies);
  }, [initialSmoothies]);

  const deleteHandler = async (id) => {
    try {
      await deleteSmoothie(id);
      const { data, error } = await getSmoothies(orderBy);
      if (error) {
        setError(error.message);
        return;
      }
      setSmoothies(data);
      setFilteredSmoothies((prevFilteredSmoothies) =>
        prevFilteredSmoothies?.filter((smoothie) => smoothie.id !== id)
      );
    } catch (error) {
      setError(error.message);
    }
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

  const handleOrderByChange = async (event) => {
    try {
      const newOrderBy = event.target.value;
      setOrderBy(newOrderBy);
  
      const { data } = await getSmoothies(newOrderBy);
      setSmoothies(data);
    } catch (error) {
      setError(error.message);
    }
  };

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
          value={orderBy}
          onChange={handleOrderByChange}
        >
          <option value="title">Title</option>
          <option value="rating">Rating</option>
          <option value="created_at">Date</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}
      <div className={styles["smoothies-list"]}>
        {(filteredSmoothies || smoothies) &&
        (filteredSmoothies || smoothies).length > 0 ? (
          (filteredSmoothies || smoothies).map((smoothie) => (
            <SmoothieCard
              key={smoothie.id}
              smoothie={smoothie}
              onDelete={deleteHandler}
            />
          ))
        ) : (
          <p className={styles.warning}>No matching smoothies found.</p>
        )}
      </div>
    </div>
  );
}

export default SmoothiesList;

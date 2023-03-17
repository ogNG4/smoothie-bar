import { supabase } from "../../lib/supabaseClient";

import { useRouter } from "next/router";

import styles from "./CreateSmoothie.module.scss";
import { useEffect, useState } from "react";

function CreateSmoothie() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState(0);
  const [formError, setFormError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please fill in all fields");
      return;
    }

    const { data, error } = await supabase
      .from("smoothies")
      .insert([{ title, method, rating }])
      .select();

    router.push("/");
  };

  return (
    <>
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="method">Method:</label>
      <textarea
        value={method}
        onChange={(event) => setMethod(event.target.value)}
      />

      <label htmlFor="">Rating:</label>
      <input
        type="number"
        min="1"
        max="5"
        onChange={(event) => setRating(event.target.value)}
      />

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
    {formError && <p className={styles.error}>{formError}</p>}
    </>
  );
}

export default CreateSmoothie;

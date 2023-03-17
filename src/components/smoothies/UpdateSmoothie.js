import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";
import styles from "./CreateSmoothie.module.scss";
import { useEffect, useState } from "react";

function UpdateSmoothie() {
  const router = useRouter();
  const { smoothieId } = router.query;

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState(0);
  const [formError, setFormError] = useState(null);
  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", smoothieId)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
      }
    };
    fetchSmoothie();
  }, [smoothieId, router]);

  console.log(smoothieId);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please fill in all fields");
      return;
    }

    await supabase
      .from("smoothies")
      .update({ title, method, rating })
      .eq("id", smoothieId)
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
          value={rating} // fixed: add value prop to input
          onChange={(event) => setRating(event.target.value)}
        />

        <button type="submit" className={styles.button}>
          Edit
        </button>
      </form>
      {formError && <p className={styles.error}>{formError}</p>}
    </>
  );
}

export default UpdateSmoothie;

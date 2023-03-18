import { supabase } from "../../config/supabaseClient";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Link from "next/link";

import Rating from "../ui/Rating";

import styles from "./SmoothieCard.module.scss";

function SmoothieCard({ smoothie, onDelete }) {
  const deleteHandler = async () => {
    await supabase.from("smoothies").delete().eq("id", smoothie.id).select();

    onDelete(smoothie.id);
  };

  return (
    <div className={styles.card}>
      <h1>{smoothie.title}</h1>
      <p>{smoothie.method}</p>
      <div className={styles.rating}>
        <Rating rating={smoothie.rating} />
      </div>
      <div className={styles.buttons}>
        <Link href={`/${smoothie.id}`} className={styles.button}>
          <AiFillEdit />
        </Link>
        <button className={styles.button} onClick={deleteHandler}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default SmoothieCard;

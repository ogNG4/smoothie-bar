

import { deleteSmoothie } from "../../../utils/deleteSmoothie";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Link from "next/link";

import Rating from "@/rating/Rating";

import styles from "./SmoothieCard.module.scss";

function SmoothieCard({ smoothie, onDelete }) {
  const deleteHandler = async () => {
 
    const result = await deleteSmoothie(smoothie.id);
    if (result.error) {
      console.log(result.error);
      return;
    }
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
        <Link href={`/${smoothie.id}`} className={styles.button} aria-label="update smoothie">
          <AiFillEdit />
        </Link>
        <button className={styles.button} onClick={deleteHandler} aria-label="delete smoothie" >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}

export default SmoothieCard;

import { AiFillStar } from "react-icons/ai";
import styles from "./Rating.module.scss";

function Rating({ rating }) {
  const stars = [...Array(5)].map((_, index) => {
    const isFilled = index < rating;
    const starColor = isFilled ? styles.filledStar : styles.emptyStar;

    return <AiFillStar key={index} className={starColor} />;
  });

  return <div className={styles.rating}>{stars}</div>;
}

export default Rating;

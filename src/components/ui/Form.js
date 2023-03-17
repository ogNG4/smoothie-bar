import styles from "./Form.module.scss";

function Form({
  title,
  method,
  rating,
  onSubmit,
  formError,
  setTitle,
  setMethod,
  setRating,
}) {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          maxlength="15"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          maxlength="50"
          value={method}
          onChange={(event) => setMethod(event.target.value)}
        />

        <label htmlFor="">Rating:</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
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

export default Form;

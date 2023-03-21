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

        <select onChange={(event) => setRating(event.target.value)} value={rating} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
        </select>

        <button type="submit" className={styles.button} aria-label="submit">
          Submit
        </button>
      </form>
      {formError && <p className={styles.error}>{formError}</p>}
    </>
  );
}

export default Form;

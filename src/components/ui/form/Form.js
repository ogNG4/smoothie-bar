import styles from "./Form.module.scss";

function Form({ title, method, rating, onSubmit, formError, onChange }) {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          maxLength="15"
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          maxLength="50"
          name="method"
          value={method}
          onChange={onChange}
        />

        <label htmlFor="rating">Rating:</label>

        <select name="rating" onChange={onChange} value={rating}>
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

import css from '../../to-do.module.css';

const InputField = ({ text, handleImput, handleSubmit }) => {
  return (
    <label>
      <input
        className={css.input}
        value={text}
        onChange={e => handleImput(e.target.value)}
      />
      <button onClick={handleSubmit} className={css.btn}>
        Add Todo
      </button>
    </label>
  );
};

export default InputField;

import { useDispatch } from 'react-redux';
import {
  removeTodo,
  toggleTodoComplete,
} from 'components/ToDo/store/todoSlice';
import css from '../../to-do.module.css';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.list}>
      <input
        onChange={() => dispatch(toggleTodoComplete({ id }))}
        className={css.checkbox}
        type="checkbox"
        checked={completed}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))} className={css.delete}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;

import { useDispatch } from 'react-redux';
import { addTask } from 'components/TaskManager/reduxTaskManager/actions';

import { Button } from '../Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispath = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispath(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter Task"
      />
      <Button type="submit">Add new task</Button>
    </form>
  );
};

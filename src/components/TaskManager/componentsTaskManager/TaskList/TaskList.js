import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import {
  getTasks,
  getStatusFilter,
} from 'components/TaskManager/reduxTaskManager/selectors';

import { statusFilters } from 'components/TaskManager/reduxTaskManager/constants';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);

  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li key={task.id} className={css.listItem}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

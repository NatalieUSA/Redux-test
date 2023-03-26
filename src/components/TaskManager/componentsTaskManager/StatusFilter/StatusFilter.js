import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from 'components/TaskManager/reduxTaskManager/constants';
import { getStatusFilter } from 'components/TaskManager/reduxTaskManager/selectors';
import { setStatusFilter } from 'components/TaskManager/reduxTaskManager/actions';
import css from './StatusFilter.module.css';
import { Button } from '../Button/Button';

export const StatusFilter = () => {
  const dispath = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispath(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>

      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

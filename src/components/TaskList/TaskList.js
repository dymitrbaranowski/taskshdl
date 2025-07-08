import { useSelector } from 'react-redux';

import { Task } from 'components/Task/Task';
import { statusFilters } from 'redux/constants';
// The TaskList component renders a list of tasks based on the current filter.
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks.items);
  const filter = useSelector(state => state.filters.status);

  const filteredTasks = tasks.filter(task => {
    if (filter === statusFilters.active) {
      return !task.completed;
    }
    if (filter === statusFilters.completed) {
      return task.completed;
    }
    return true;
  });

  return (
    <ul className={css.list}>
      {filteredTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
export default TaskList;

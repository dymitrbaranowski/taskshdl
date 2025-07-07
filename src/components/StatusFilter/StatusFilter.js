import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
// Completed". The component is styled using CSS modules.
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);

  return (
    <div className={css.wrapper}>
      <Button isActive={filter === statusFilters.all}>All</Button>
      <Button isActive={filter === statusFilters.active}>Active</Button>
      <Button isActive={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
// The StatusFilter component provides buttons to filter tasks by their status.
// It uses the Button component to render three buttons: "All", "Active", and "

import { RadioButton } from '../atoms/RadioButton';
import './molecules.css';

type TodoFilterProps = {
  filter: string;
  onFiltering: (filter: string) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onFiltering }) => {

  const handleFilterChange = (newFilter: string) => {
    onFiltering(newFilter);
  };

  return (
    <div className='filtercontainer radio-group '>
      <RadioButton radioButtonType="base" checked={filter === 'all'} onChange={() => handleFilterChange('all')} id="all" name="filter" children="すべて" />
      <RadioButton radioButtonType="base" checked={filter === 'incomplete'} onChange={() => handleFilterChange('incomplete')} id="incomplete" name="filter" children="未完了" />
      <RadioButton radioButtonType="base" checked={filter === 'completed'} onChange={() => handleFilterChange('completed')} id="completed" name="filter" children="完了" />
    </div>
  );
};

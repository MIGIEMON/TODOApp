import { Checkbox } from '../atoms/Checkbox';
import { Button } from '../atoms/Button';
import { ReactComponent as EditIcon } from "../atoms/image/EditIcon.svg";
import { ReactComponent as DeleteIcon } from "../atoms/image/DeleteIcon.svg";
import './molecules.css';

type TodoItemProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
  onCheckTodo: () => void;
  onEditTodo: () => void;
  onDelete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, todo, isCompleted, onCheckTodo, onEditTodo, onDelete }) => {
  return (
    <div className='listcontainer'>
      <span className="block-left">
        <Checkbox checkBoxType="base" isCompleted={isCompleted} onChange={onCheckTodo} id={`${id}`} children={todo} />
      </span>
      <div className="block-right">
        <Button buttonType="icon" onClick={onEditTodo}><EditIcon /></Button>
        <Button buttonType="icon" onClick={onDelete}><DeleteIcon /></Button>
      </div>
    </div>
  );
};
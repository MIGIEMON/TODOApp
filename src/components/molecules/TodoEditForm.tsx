import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { ReactComponent as CancelIcon } from "../atoms/image/CancelIcon.svg";
import { ReactComponent as SaveIcon } from "../atoms/image/SaveIcon.svg";
import './molecules.css';

type TodoEditFormProps = {
  todo: string;
  onCancel: (e: React.MouseEvent) => void;
  onSaveTodo: (todo: string) => void;
}

export const TodoEditForm: React.FC<TodoEditFormProps> = ({ todo, onCancel, onSaveTodo }) => {
  const [newTodo, setNewTodo] = useState(todo);
  const handleSave = () => {
    newTodo && (onSaveTodo(newTodo))
  };
  return (
    <div className='listcontainer'>
      <span className="block-left">
        <Input inputType="animation" value={newTodo} onChange={setNewTodo} placeholder="タスクを入力" />
      </span>
      <div className="block-right">
        <Button buttonType="icon" onClick={onCancel}><CancelIcon /></Button>
        <Button buttonType="icon" onClick={handleSave}><SaveIcon /></Button>
      </div>
    </div>
  );
};
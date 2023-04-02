import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoEditForm } from './TodoEditForm';

const onCancel = jest.fn();
const onSaveTodo = jest.fn();

describe('TodoEditFormコンポーネント', () => {
  it('正しくレンダリングされること', () => {
    const { getByPlaceholderText, getByLabelText, getByTestId } = render(
      <TodoEditForm todo="test" onCancel={onCancel} onSaveTodo={onSaveTodo} />
    );

    const input = getByPlaceholderText('タスクを入力');
    expect(input).toBeInTheDocument();

    const cancelButton = getByTestId('cancel-button');
    expect(cancelButton).toBeInTheDocument();

    const saveButton = getByTestId('save-button');
    expect(saveButton).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'new task' } });
    expect(input).toBe('new task');
  });

  it('キャンセルボタンをクリックすると、onCancelが呼ばれること', () => {
    const { getByTestId } = render(
      <TodoEditForm todo="test" onCancel={onCancel} onSaveTodo={onSaveTodo} />
    );

    const cancelButton = getByTestId('cancel-button');
    fireEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalled();
    expect(onSaveTodo).not.toHaveBeenCalled();
  });

  it('保存ボタンをクリックすると、onSaveTodoが呼ばれること', () => {
    const { getByTestId } = render(
      <TodoEditForm todo="test" onCancel={onCancel} onSaveTodo={onSaveTodo} />
    );

    const saveButton = getByTestId('save-button');
    fireEvent.click(saveButton);

    expect(onSaveTodo).toHaveBeenCalledWith('test');
    expect(onCancel).not.toHaveBeenCalled();
  });
});

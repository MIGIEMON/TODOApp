import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Inputコンポーネント', () => {
  const handleChange = jest.fn();

  it('インプットにvalueが入った状態で表示される', () => {
    const { container } = render(
      <Input inputType="test" value="テスト" onChange={handleChange} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('valueを変更するとonChangeが呼び出される', () => {
    const { getByDisplayValue } = render(
      <Input inputType="test" value="テスト" onChange={handleChange} />
    );
    fireEvent.change(getByDisplayValue('テスト'), { target: { value: 'テスト2' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('テスト2');
  });

  it('プレースホルダーが表示される', () => {
    const { getByPlaceholderText } = render(
      <Input
        inputType="test"
        value=""
        onChange={handleChange}
        placeholder="プレースホルダー"
      />
    );
    expect(getByPlaceholderText('プレースホルダー')).toBeInTheDocument();
  });
});

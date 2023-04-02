import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButtonコンポーネント', () => {
  const onChangeMock = jest.fn();
  const props = {
    radioButtonType: 'red',
    checked: false,
    onChange: onChangeMock,
    id: 'radioId',
    name: 'radioName'
  };

  it('ラジオボタンが表示される', () => {
    const { container } = render(<RadioButton {...props}>テスト用ラベル</RadioButton>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('ラジオボタンをクリックするとonChange関数が呼び出される', () => {
    const { getByLabelText } = render(<RadioButton {...props}>テスト用ラベル</RadioButton>);
    fireEvent.click(getByLabelText('テスト用ラベル'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it('ラジオボタンが選択される', () => {
    const { getByLabelText } = render(<RadioButton {...props} checked={true}>テスト用ラベル</RadioButton>);
    expect(getByLabelText('テスト用ラベル')).toBeChecked();
  });
});

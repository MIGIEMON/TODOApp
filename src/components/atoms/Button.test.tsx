import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from './Button';

describe('Buttonコンポーネント', () => {
  it('ボタンと子要素が表示される', () => {
    const { getByText } = render(
      <Button buttonType="primary">
        Click me
      </Button>
    );
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('ボタンをクリックするとonClick関数が呼び出される', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button buttonType="primary" onClick={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('buttonTypeプロパティに基づいてclassNameを持つ', () => {
    const { getByText } = render(
      <Button buttonType="primary">
        Click me
      </Button>
    );
    expect(getByText('Click me')).toHaveClass('primary');
  });
});

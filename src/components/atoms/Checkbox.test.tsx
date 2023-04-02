import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkboxコンポーネント', () => {
  it('チェックボックスが表示される', () => {
    const { getByRole } = render(<Checkbox checkBoxType="default" isCompleted={false} onChange={() => { }} id="test-checkbox">テスト</Checkbox>);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('チェックボックスをクリックするとonChange関数が呼び出される', () => {
    const mockOnChange = jest.fn();
    const { getByRole } = render(<Checkbox checkBoxType="default" isCompleted={false} onChange={mockOnChange} id="test-checkbox">テスト</Checkbox>);
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
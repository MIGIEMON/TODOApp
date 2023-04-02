import React from "react";
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Appコンポーネント', () => {
    it('正しくレンダリングされること', () => {
        const { getByText } = render(<App />);
        expect(getByText)
    })
})
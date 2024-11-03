import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input_ID_1 from '../components/UI/input/input_ID_1.jsx';

describe('Input_ID_1', () => {
  test('renders input with correct attributes', () => {
    const setStateMock = jest.fn();
    render(<Input_ID_1 type="text" placeholder="Enter text" value="" setState={setStateMock} />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  test('calls setState on change', () => {
    const setStateMock = jest.fn();
    render(<Input_ID_1 type="text" placeholder="Enter text" value="" setState={setStateMock} />);

    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'New value' } });

    expect(setStateMock).toHaveBeenCalledWith('New value');
  });
});

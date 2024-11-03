import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button_ID_1 from '../components/UI/button/button_ID_1'; 
import { useNavigate } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Button_ID_1', () => {
  it('should render the button with correct text and navigate on click', () => {
    const link = '/signup';
    const text = 'Sign Up';
    const mockNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockNavigate);

    render(
      <MemoryRouter>
        <Button_ID_1 link={link} text={text} />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: text });
    expect(button).toBeInTheDocument();

    button.click();
    expect(mockNavigate).toHaveBeenCalledWith(link);
  });
});

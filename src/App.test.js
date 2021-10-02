import { render, screen } from '@testing-library/react';
import App from './App';
import React  from 'react';

test('renders Head Table', () => {
  render(<App />);
  const linkElement = screen.getByText(/Invoice Summary/i);
  expect(linkElement).toBeInTheDocument();
});

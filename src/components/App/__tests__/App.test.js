import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders page title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/An electronic component.../i);
  expect(titleElement).toBeInTheDocument();
});
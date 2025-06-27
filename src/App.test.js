import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world message', () => {
  render(<App />);
  const helloElement = screen.getByText(/hello, world!/i);
  expect(helloElement).toBeInTheDocument();
});

test('renders greeting form', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/your name here/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders app description', () => {
  render(<App />);
  const descriptionElement = screen.getByText(/this is a simple react app built with claude code workflow/i);
  expect(descriptionElement).toBeInTheDocument();
}); 
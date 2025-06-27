import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GreetingForm from './GreetingForm';

describe('GreetingForm Component', () => {
  test('renders default hello world message', () => {
    render(<GreetingForm />);
    const greetingElement = screen.getByText(/hello, world!/i);
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders input field with placeholder', () => {
    render(<GreetingForm />);
    const inputElement = screen.getByPlaceholderText(/your name here/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('renders label for input field', () => {
    render(<GreetingForm />);
    const labelElement = screen.getByText(/enter your name:/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('displays personalized greeting when name is entered', () => {
    render(<GreetingForm />);
    const inputElement = screen.getByPlaceholderText(/your name here/i);
    
    fireEvent.change(inputElement, { target: { value: 'John' } });
    
    const personalizedGreeting = screen.getByText(/hello, john!/i);
    expect(personalizedGreeting).toBeInTheDocument();
  });

  test('updates greeting dynamically as user types', () => {
    render(<GreetingForm />);
    const inputElement = screen.getByPlaceholderText(/your name here/i);
    
    fireEvent.change(inputElement, { target: { value: 'Alice' } });
    expect(screen.getByText(/hello, alice!/i)).toBeInTheDocument();
    
    fireEvent.change(inputElement, { target: { value: 'Bob' } });
    expect(screen.getByText(/hello, bob!/i)).toBeInTheDocument();
  });

  test('shows default greeting when input is cleared', () => {
    render(<GreetingForm />);
    const inputElement = screen.getByPlaceholderText(/your name here/i);
    
    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect(screen.getByText(/hello, john!/i)).toBeInTheDocument();
    
    fireEvent.change(inputElement, { target: { value: '' } });
    expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
  });

  test('trims whitespace from name input', () => {
    render(<GreetingForm />);
    const inputElement = screen.getByPlaceholderText(/your name here/i);
    
    fireEvent.change(inputElement, { target: { value: '  John  ' } });
    
    const greetingElement = screen.getByText(/hello, john!/i);
    expect(greetingElement).toBeInTheDocument();
  });

  test('shows default greeting for whitespace-only input', () => {
    render(<GreetingForm />);
    const inputElement = screen.getByPlaceholderText(/your name here/i);
    
    fireEvent.change(inputElement, { target: { value: '   ' } });
    
    const defaultGreeting = screen.getByText(/hello, world!/i);
    expect(defaultGreeting).toBeInTheDocument();
  });

  test('input field is properly controlled', () => {
    render(<GreetingForm />);
    const inputElement = screen.getByPlaceholderText(/your name here/i);
    
    expect(inputElement.value).toBe('');
    
    fireEvent.change(inputElement, { target: { value: 'Test Name' } });
    expect(inputElement.value).toBe('Test Name');
  });
});
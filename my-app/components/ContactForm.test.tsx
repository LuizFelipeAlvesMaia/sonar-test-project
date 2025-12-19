import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
  it('should render the form with all fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByText('Contact Form')).toBeInTheDocument();
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('message-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('should show error when name is empty', () => {
    render(<ContactForm />);
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    expect(screen.getByTestId('name-error')).toHaveTextContent('Name is required');
  });

  it('should show error when email is empty', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    expect(screen.getByTestId('email-error')).toHaveTextContent('Email is required');
  });

  it('should show error when email format is invalid', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    expect(screen.getByTestId('email-error')).toHaveTextContent('Invalid email format');
  });

  it('should show error when message is empty', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    expect(screen.getByTestId('message-error')).toHaveTextContent('Message is required');
  });

  it('should submit form with valid data', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const messageInput = screen.getByTestId('message-input');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message!' } });
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    expect(screen.getByTestId('success-message')).toBeInTheDocument();
    expect(screen.getByText('Thank you! Your message has been sent successfully.')).toBeInTheDocument();
  });

  it('should clear form after successful submission', async () => {
    jest.useFakeTimers();
    render(<ContactForm />);
    
    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const messageInput = screen.getByTestId('message-input');
    
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    // Fast-forward time
    jest.advanceTimersByTime(3000);
    
    await waitFor(() => {
      expect(screen.queryByTestId('success-message')).not.toBeInTheDocument();
    });
    
    jest.useRealTimers();
  });

  it('should update input values correctly', () => {
    render(<ContactForm />);
    
    const nameInput = screen.getByTestId('name-input') as HTMLInputElement;
    const emailInput = screen.getByTestId('email-input') as HTMLInputElement;
    const messageInput = screen.getByTestId('message-input') as HTMLTextAreaElement;
    
    fireEvent.change(nameInput, { target: { value: 'Jane' } });
    fireEvent.change(emailInput, { target: { value: 'jane@test.com' } });
    fireEvent.change(messageInput, { target: { value: 'My message' } });
    
    expect(nameInput.value).toBe('Jane');
    expect(emailInput.value).toBe('jane@test.com');
    expect(messageInput.value).toBe('My message');
  });
});

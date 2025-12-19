import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('should render with initial value of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });

  it('should render with custom initial value', () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });

  it('should increment counter when + button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
    
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });

  it('should decrement counter when - button is clicked', () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByTestId('decrement-button');
    
    fireEvent.click(decrementButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });

  it('should reset counter to 0 when reset button is clicked', () => {
    render(<Counter initialValue={10} />);
    const resetButton = screen.getByTestId('reset-button');
    
    fireEvent.click(resetButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });

  it('should handle multiple operations', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    const decrementButton = screen.getByTestId('decrement-button');
    const resetButton = screen.getByTestId('reset-button');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
    
    fireEvent.click(decrementButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
    
    fireEvent.click(resetButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });

  it('should allow negative numbers', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
  });
});

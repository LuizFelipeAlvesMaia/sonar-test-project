import { render, screen, fireEvent } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard Component', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  };

  it('should render user information', () => {
    render(<UserCard user={mockUser} />);
    
    expect(screen.getByTestId('user-name')).toHaveTextContent('John Doe');
    expect(screen.getByTestId('user-email')).toHaveTextContent('john@example.com');
  });

  it('should not render delete button when onDelete is not provided', () => {
    render(<UserCard user={mockUser} />);
    
    expect(screen.queryByTestId('delete-button')).not.toBeInTheDocument();
  });

  it('should render delete button when onDelete is provided', () => {
    const mockOnDelete = jest.fn();
    render(<UserCard user={mockUser} onDelete={mockOnDelete} />);
    
    expect(screen.getByTestId('delete-button')).toBeInTheDocument();
  });

  it('should call onDelete with correct id when delete button is clicked', () => {
    const mockOnDelete = jest.fn();
    render(<UserCard user={mockUser} onDelete={mockOnDelete} />);
    
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  it('should render different users correctly', () => {
    const user1 = { id: 1, name: 'Alice', email: 'alice@test.com' };
    const user2 = { id: 2, name: 'Bob', email: 'bob@test.com' };
    
    const { rerender } = render(<UserCard user={user1} />);
    expect(screen.getByTestId('user-name')).toHaveTextContent('Alice');
    
    rerender(<UserCard user={user2} />);
    expect(screen.getByTestId('user-name')).toHaveTextContent('Bob');
  });
});

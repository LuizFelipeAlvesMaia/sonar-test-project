import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('SonarQube Test Project')).toBeInTheDocument();
  });

  it('displays all products', () => {
    render(<Home />);
    expect(screen.getByText('Laptop Pro')).toBeInTheDocument();
    expect(screen.getByText('Wireless Mouse')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
  });

  it('displays all users initially', () => {
    render(<Home />);
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
  });

  it('filters users when searching', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search users...');
    
    fireEvent.change(searchInput, { target: { value: 'Alice' } });
    
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Charlie Brown')).not.toBeInTheDocument();
  });

  it('shows "No users found" when search has no results', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search users...');
    
    fireEvent.change(searchInput, { target: { value: 'xyz123' } });
    
    expect(screen.getByText('No users found')).toBeInTheDocument();
  });

  it('deletes user when delete button is clicked', () => {
    render(<Home />);
    
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    
    // Find all delete buttons and click the first one
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.queryByText('Alice Johnson')).not.toBeInTheDocument();
  });

  it('adds product to cart and updates cart count', () => {
    render(<Home />);
    
    // Find the "Add to Cart" button for the first product
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);
    
    // Cart badge should show 1
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('shows cart dropdown when cart icon is clicked', () => {
    render(<Home />);
    
    const cartButton = screen.getByLabelText('Shopping cart');
    fireEvent.click(cartButton);
    
    expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
  });

  it('displays empty cart message when cart is empty', () => {
    render(<Home />);
    
    const cartButton = screen.getByLabelText('Shopping cart');
    fireEvent.click(cartButton);
    
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('calculates cart total correctly', () => {
    render(<Home />);
    
    // Add first product (Laptop Pro - R$ 4999.99)
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);
    
    // Open cart
    const cartButton = screen.getByLabelText('Shopping cart');
    fireEvent.click(cartButton);
    
    // Check total
    expect(screen.getByText('R$ 4999.99')).toBeInTheDocument();
  });

  it('increases quantity when same product is added multiple times', () => {
    render(<Home />);
    
    const addToCartButtons = screen.getAllByText('Add to Cart');
    
    // Add same product twice
    fireEvent.click(addToCartButtons[0]);
    fireEvent.click(addToCartButtons[0]);
    
    // Cart badge should show 2
    expect(screen.getByText('2')).toBeInTheDocument();
    
    // Open cart and check quantity
    const cartButton = screen.getByLabelText('Shopping cart');
    fireEvent.click(cartButton);
    
    expect(screen.getByText(/x2/)).toBeInTheDocument();
  });

  it('clears cart when clear button is clicked', () => {
    render(<Home />);
    
    // Add product
    const addToCartButtons = screen.getAllByText('Add to Cart');
    fireEvent.click(addToCartButtons[0]);
    
    // Open cart
    const cartButton = screen.getByLabelText('Shopping cart');
    fireEvent.click(cartButton);
    
    // Clear cart
    const clearButton = screen.getByText('Clear Cart');
    fireEvent.click(clearButton);
    
    // Cart should be closed and empty
    expect(screen.queryByText('Shopping Cart')).not.toBeInTheDocument();
  });

  it('displays user count correctly', () => {
    render(<Home />);
    expect(screen.getByText('User List (3)')).toBeInTheDocument();
  });

  it('updates user count after deletion', () => {
    render(<Home />);
    
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    
    expect(screen.getByText('User List (2)')).toBeInTheDocument();
  });

  it('renders Counter component', () => {
    render(<Home />);
    // Counter should have initial value displayed
    expect(screen.getByText(/Count:/)).toBeInTheDocument();
  });

  it('renders ContactForm component', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  });
});
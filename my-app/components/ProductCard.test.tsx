import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 99.99,
    description: 'This is a test product',
    inStock: true
  };

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText('R$ 99,99')).toBeInTheDocument();
  });

  it('calls onAddToCart when button is clicked and product is in stock', () => {
    const mockOnAddToCart = jest.fn();
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />);
    
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);
    
    expect(mockOnAddToCart).toHaveBeenCalledWith(1);
  });

  it('disables button when product is out of stock', () => {
    const outOfStockProduct = { ...mockProduct, inStock: false };
    render(<ProductCard product={outOfStockProduct} />);
    
    const button = screen.getByText('Out of Stock');
    expect(button).toBeDisabled();
  });

  it('does not call onAddToCart when product is out of stock', () => {
    const mockOnAddToCart = jest.fn();
    const outOfStockProduct = { ...mockProduct, inStock: false };
    render(<ProductCard product={outOfStockProduct} onAddToCart={mockOnAddToCart} />);
    
    const button = screen.getByText('Out of Stock');
    fireEvent.click(button);
    
    expect(mockOnAddToCart).not.toHaveBeenCalled();
  });

  it('formats price correctly in Brazilian Real', () => {
    const productWithDifferentPrice = { ...mockProduct, price: 1234.56 };
    render(<ProductCard product={productWithDifferentPrice} />);
    
    expect(screen.getByText('R$ 1.234,56')).toBeInTheDocument();
  });
});
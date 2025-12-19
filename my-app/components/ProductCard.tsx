import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart && product.inStock) {
      onAddToCart(product.id);
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="product-card border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600 my-2">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`px-4 py-2 rounded ${
            product.inStock 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};
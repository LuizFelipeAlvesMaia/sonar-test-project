'use client';

import { useState } from 'react';
import Image from "next/image";
import Counter from "@/components/Counter";
import ContactForm from "@/components/ContactForm";
import UserCard from "@/components/UserCard";
import { ProductCard } from "@/components/ProductCard";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

interface CartItem {
  productId: number;
  quantity: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  ]);

  const [products] = useState<Product[]>([
    { id: 1, name: "Laptop Pro", price: 4999.99, description: "High-performance laptop", inStock: true },
    { id: 2, name: "Wireless Mouse", price: 149.90, description: "Ergonomic wireless mouse", inStock: true },
    { id: 3, name: "Mechanical Keyboard", price: 599.99, description: "RGB mechanical keyboard", inStock: false },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleAddToCart = (productId: number) => {
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.productId === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
    }
  };

  const getCartTotal = (): number => {
    return cart.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const getCartItemCount = (): number => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearCart = () => {
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <main>
        <div className="max-w-6xl mx-auto">
          {/* Header with Cart */}
          <header className="text-center mb-12 relative">
            <div className="absolute top-0 right-0">
              <button
                onClick={() => setShowCart(!showCart)}
                className="relative bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                aria-label="Shopping cart"
              >
                <span className="text-2xl">🛒</span>
                {getCartItemCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {getCartItemCount()}
                  </span>
                )}
              </button>

              {/* Cart Dropdown */}
              {showCart && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 z-10">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Shopping Cart</h3>
                  {cart.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-2 mb-4">
                        {cart.map(item => {
                          const product = products.find(p => p.id === item.productId);
                          return product ? (
                            <div key={item.productId} className="flex justify-between items-center text-sm">
                              <span className="text-gray-700 dark:text-gray-300">
                                {product.name} x{item.quantity}
                              </span>
                              <span className="font-semibold text-gray-900 dark:text-white">
                                R$ {(product.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          ) : null;
                        })}
                      </div>
                      <div className="border-t pt-3 flex justify-between items-center font-bold">
                        <span className="text-gray-900 dark:text-white">Total:</span>
                        <span className="text-lg text-gray-900 dark:text-white">
                          R$ {getCartTotal().toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={clearCart}
                        className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Clear Cart
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              SonarQube Test Project
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Enhanced Code Coverage Demo with New Features
            </p>
          </header>

          {/* Products Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Products</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Counter Component */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <Counter initialValue={0} />
            </div>

            {/* User Cards with Search */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                User List ({filteredUsers.length})
              </h2>
              
              {/* Search Input */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Search users"
                />
              </div>

              <div className="space-y-3">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}
                      onDelete={handleDeleteUser}
                    />
                  ))
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                    No users found
                  </p>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            🧪 About This Project
          </h3>
          <div className="text-left space-y-2 text-gray-700 dark:text-gray-300">
            <p>✅ <strong>Jest</strong> configured for unit testing</p>
            <p>✅ <strong>React Testing Library</strong> for component testing</p>
            <p>✅ <strong>Code Coverage</strong> integrated with SonarQube</p>
            <p>✅ State management with React hooks</p>
            <p>✅ Shopping cart functionality</p>
            <p>✅ User search and filtering</p>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm">
              yarn test
            </code>
            <code className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded text-sm">
              yarn test:coverage
            </code>
          </div>
        </div>
      </footer>
    </div>
  );
}
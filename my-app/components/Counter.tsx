'use client';

import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

export default function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Counter Component</h2>
      <div className="text-4xl font-mono" data-testid="counter-value">
        {count}
      </div>
      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          data-testid="decrement-button"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          data-testid="reset-button"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          data-testid="increment-button"
        >
          +
        </button>
      </div>
    </div>
  );
}

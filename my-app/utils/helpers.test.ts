import {
  sum,
  multiply,
  divide,
  formatCurrency,
  validateEmail,
  capitalize,
  isEven,
  filterByAge,
} from './helpers';

describe('Math utilities', () => {
  describe('sum', () => {
    it('should add two positive numbers', () => {
      expect(sum(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(sum(-2, -3)).toBe(-5);
    });

    it('should handle zero', () => {
      expect(sum(5, 0)).toBe(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should handle negative numbers', () => {
      expect(divide(-10, 2)).toBe(-5);
    });
  });
});

describe('String utilities', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    it('should lowercase remaining letters', () => {
      expect(capitalize('HELLO')).toBe('Hello');
    });

    it('should handle single character', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('validateEmail', () => {
    it('should validate correct email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('should reject email without @', () => {
      expect(validateEmail('testexample.com')).toBe(false);
    });

    it('should reject email without domain', () => {
      expect(validateEmail('test@')).toBe(false);
    });

    it('should reject email with spaces', () => {
      expect(validateEmail('test @example.com')).toBe(false);
    });

    it('should validate email with subdomain', () => {
      expect(validateEmail('test@mail.example.com')).toBe(true);
    });
  });
});

describe('Number utilities', () => {
  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(7)).toBe(false);
    });

    it('should handle negative numbers', () => {
      expect(isEven(-4)).toBe(true);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('formatCurrency', () => {
    it('should format currency in BRL', () => {
      const formatted = formatCurrency(1234.56);
      expect(formatted).toContain('1.234,56');
    });

    it('should handle zero', () => {
      const formatted = formatCurrency(0);
      expect(formatted).toContain('0,00');
    });

    it('should handle negative values', () => {
      const formatted = formatCurrency(-100);
      expect(formatted).toContain('100');
      expect(formatted).toContain('-');
    });
  });
});

describe('Array utilities', () => {
  describe('filterByAge', () => {
    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 17 },
      { name: 'Charlie', age: 30 },
      { name: 'David', age: 15 },
    ];

    it('should filter users by minimum age', () => {
      const result = filterByAge(users, 18);
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Alice');
      expect(result[1].name).toBe('Charlie');
    });

    it('should return all users if all meet criteria', () => {
      const result = filterByAge(users, 10);
      expect(result).toHaveLength(4);
    });

    it('should return empty array if no users meet criteria', () => {
      const result = filterByAge(users, 40);
      expect(result).toHaveLength(0);
    });

    it('should handle empty array', () => {
      const result = filterByAge([], 18);
      expect(result).toHaveLength(0);
    });
  });
});

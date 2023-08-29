 class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

// Test cases
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // Test for adding 2 digits
  describe('add', () => {
    it('should correctly add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should correctly add a positive and a negative number', () => {
      expect(calculator.add(-4, 7)).toBe(3);
    });

    it('should correctly add two negative numbers', () => {
      expect(calculator.add(-10, -5)).toBe(-15);
    });
  });

   // Test for subtracting 2 digits
  describe('subtract', () => {
    it('should correctly subtract two positive numbers', () => {
      expect(calculator.subtract(8, 3)).toBe(5);
    });

    it('should correctly subtract a positive and a negative number', () => {
      expect(calculator.subtract(5, -3)).toBe(2);
    });

    it('should correctly subtract two negative numbers', () => {
      expect(calculator.subtract(-10, -5)).toBe(-5);
    });
  });

  // Test for dividing 2 digits
  describe('divide', () => {
    it('should correctly divide two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
    // Error in case divided by zero.
    it('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(8, 0)).toThrowError("Division by zero is not allowed.");
    });

    it('should correctly divide a negative number by a positive number', () => {
      expect(calculator.divide(-15, 3)).toBe(-5);
    });
  });

  // Test cases for 'multiply' method
  describe('multiply', () => {
    it('should correctly multiply two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    it('should correctly multiply a positive and a negative number', () => {
      expect(calculator.multiply(-4, 7)).toBe(-28);
    });

    it('should correctly multiply two negative numbers', () => {
      expect(calculator.multiply(-10, -5)).toBe(50);
    });
  });
});
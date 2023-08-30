const Calculator = require('./calculator'); 

describe('Calculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator();
  });
  
  test('should add numbers', () => {
    calculator.add(5);
    calculator.add(3);
    expect(calculator.result).toBe(8);
  });

  test('should add numbers', () => {
    calculator.add(6);
    calculator.add(4);
    expect(calculator.result).toBe(10);
  });

  test('should add numbers', () => {
    calculator.subtract(5);
    calculator.add(3);
    expect(calculator.result).toBe(-2);
  });
  
  test('should subtract numbers', () => {
    calculator.add(10);
    calculator.subtract(5);
    expect(calculator.result).toBe(5);
  });

  test('should subtract numbers', () => {
    calculator.subtract(5);
    expect(calculator.result).toBe(-5);
  });

  test('should subtract numbers', () => {
    calculator.add(20);
    calculator.subtract(26);
    expect(calculator.result).toBe(-6);
  });
  
  test('should divide numbers', () => {
    calculator.add(10);
    calculator.divide(2);
    expect(calculator.result).toBe(5);
  });
  
  test('should divide numbers', () => {
    calculator.add(20);
    calculator.divide(2);
    expect(calculator.result).toBe(10);
  });

  test('should divide numbers', () => {
    calculator.add(1);
    calculator.divide(2);
    expect(calculator.result).toBe(0.5);
  });

  test('should multiply numbers', () => {
    calculator.add(2);
    calculator.multiply(5);
    expect(calculator.result).toBe(10);
  });

  test('should multiply numbers', () => {
    calculator.add(5);
    calculator.multiply(5);
    expect(calculator.result).toBe(25);
  });

  test('should multiply numbers', () => {
    calculator.add(0.2);
    calculator.multiply(5);
    expect(calculator.result).toBe(1);
  });
});
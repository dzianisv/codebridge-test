"""fibonacci.py

Utility to compute Fibonacci numbers.

This module provides:
- fibonacci(n): Return the nth Fibonacci number for n >= 0.
- A simple __main__ section that prints the first 10 Fibonacci numbers for quick demonstration.
"""

def fibonacci(n):
    """Return the nth Fibonacci number.

    The sequence is defined with:
      fibonacci(0) == 0
      fibonacci(1) == 1
      fibonacci(n) == fibonacci(n-1) + fibonacci(n-2) for n >= 2

    Parameters:
    - n (int): The index of the Fibonacci number to compute. Must be non-negative.

    Returns:
    - int: The nth Fibonacci number.

    Raises:
    - TypeError: If n is not an integer.
    - ValueError: If n is negative.
    """
    if not isinstance(n, int):
        raise TypeError("n must be an integer")
    if n < 0:
        raise ValueError("n must be non-negative")

    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a


if __name__ == "__main__":
    # Print the first 10 Fibonacci numbers: fibonacci(0) through fibonacci(9)
    for i in range(10):
        print(fibonacci(i))

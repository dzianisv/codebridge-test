"""Fibonacci utilities."""

def fibonacci(n):
    """Return the nth Fibonacci number.

    The sequence is defined by F(0) = 0, F(1) = 1 and F(n) = F(n-1) + F(n-2) for n >= 2.
    This implementation uses an iterative approach with O(n) time and O(1) space.
    """
    if n < 0:
        raise ValueError("n must be a non-negative integer")
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

if __name__ == "__main__":
    # Print the first 10 Fibonacci numbers: F(0) through F(9)
    line = " ".join(str(fibonacci(i)) for i in range(10))
    print(line)

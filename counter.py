class Counter:
    """
    Simple counter with increment, decrement, and value retrieval.
    """
    def __init__(self, initial: int = 0):
        self._value = int(initial)

    def increment(self, amount: int = 1) -> int:
        """Increase the counter by 'amount' (default 1) and return new value."""
        self._value += int(amount)
        return self._value

    def decrement(self, amount: int = 1) -> int:
        """Decrease the counter by 'amount' (default 1) and return new value."""
        self._value -= int(amount)
        return self._value

    def get_value(self) -> int:
        """Return the current value of the counter."""
        return self._value

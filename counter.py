class Counter:
    """
    Simple counter with increment, decrement, and value retrieval.
    """
    def __init__(self, initial: int = 0) -> None:
        self._value = int(initial)

    def increment(self, amount: int = 1) -> None:
        """
        Increase the counter by 'amount' (default 1).
        """
        self._value += int(amount)

    def decrement(self, amount: int = 1) -> None:
        """
        Decrease the counter by 'amount' (default 1).
        """
        self._value -= int(amount)

    def get_value(self) -> int:
        """
        Return the current counter value.
        """
        return self._value

class Counter:
    def __init__(self, start: int = 0) -> None:
        self._value = start

    def increment(self, amount: int = 1) -> int:
        self._value += amount
        return self._value

    def decrement(self, amount: int = 1) -> int:
        self._value -= amount
        return self._value

    def get_value(self) -> int:
        return self._value


def main() -> None:
    c = Counter(0)
    for _ in range(10):
        c.increment()
        print(c.get_value())


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Simple CLI calculator.

Usage:
  python calculator.py add 2 3
  python calculator.py subtract 5 2
  python calculator.py multiply 4 6
  python calculator.py divide 10 2

Output is the numeric result. If the result is an integer, it is printed as an int
without a trailing decimal point.
"""

import sys


def _to_number(s: str) -> float:
    # Always parse as float for flexibility, callers will format as int when appropriate
    try:
        return float(s)
    except ValueError as exc:
        raise TypeError(f"Invalid number: {s}") from exc


def add(a: float, b: float) -> float:
    return a + b


def subtract(a: float, b: float) -> float:
    return a - b


def multiply(a: float, b: float) -> float:
    return a * b


def divide(a: float, b: float) -> float:
    if b == 0:
        raise ZeroDivisionError("division by zero")
    return a / b


def _format_result(value: float) -> str:
    # If the value is an integer, print as int for nicer output
    if value.is_integer():
        return str(int(value))
    return str(value)


def main(argv: list[str]) -> int:
    if len(argv) != 4:
        print("Usage: python calculator.py <operation> <a> <b>")
        return 2

    op, sa, sb = argv[1], argv[2], argv[3]

    try:
        a = _to_number(sa)
        b = _to_number(sb)
    except TypeError as exc:
        print(str(exc))
        return 2

    try:
        if op == "add":
            res = add(a, b)
        elif op == "subtract":
            res = subtract(a, b)
        elif op == "multiply":
            res = multiply(a, b)
        elif op == "divide":
            res = divide(a, b)
        else:
            print(f"Unknown operation: {op}")
            return 2
    except ZeroDivisionError as exc:
        print(str(exc))
        return 1

    # Print formatted result
    print(_format_result(res))
    return 0


if __name__ == "__main__":
    # Support direct execution from the repository root
    raise SystemExit(main(sys.argv))

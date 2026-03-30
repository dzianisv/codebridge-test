#!/usr/bin/env python3
import argparse
import sys

def _format_result(value):
    # If value is a float that represents an integer, print as int for clean output
    try:
        if isinstance(value, float) and value.is_integer():
            return str(int(value))
    except Exception:
        pass
    return str(value)

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("division by zero")
    return a / b

def main():
    parser = argparse.ArgumentParser(prog="calculator", description="Basic math operations")
    subparsers = parser.add_subparsers(dest="operation", required=True)

    for name in ["add", "subtract", "multiply", "divide"]:
        sp = subparsers.add_parser(name)
        sp.add_argument("a", type=float)
        sp.add_argument("b", type=float)

    args = parser.parse_args()

    op = args.operation
    a = args.a
    b = args.b

    if op == "add":
        res = add(a, b)
    elif op == "subtract":
        res = subtract(a, b)
    elif op == "multiply":
        res = multiply(a, b)
    elif op == "divide":
        res = divide(a, b)
    else:
        parser.error("Unknown operation")

    print(_format_result(res))

if __name__ == "__main__":
    main()

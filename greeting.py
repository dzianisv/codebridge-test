def greet(name: str) -> str:
    """Return a greeting for the given name.

    This function constructs a simple greeting string of the form:
    "Hello, <name>!"
    """
    return f"Hello, {name}!"


if __name__ == "__main__":
    print(greet("World"))

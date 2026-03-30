def greet(name: str) -> str:
    """Return a greeting for the given name.

    Args:
        name: The name to greet.

    Returns:
        A string in the format 'Hello, {name}!'.
    """
    return f"Hello, {name}!"


if __name__ == "__main__":
    print(greet("World"))

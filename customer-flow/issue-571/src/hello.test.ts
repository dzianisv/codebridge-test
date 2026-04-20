import { hello } from "./hello";
import { describe, test, expect } from "bun:test";

describe("hello", () => {
  test("returns exactly Hello, world!", () => {
    expect(hello()).toBe("Hello, world!");
  });
});
import { describe, test, expect } from "bun:test";
import { hello } from "./hello";

describe("hello", () => {
  test("returns Hello, world!", () => {
    expect(hello()).toBe("Hello, world!");
  });
});

import { hello } from "./hello";
import { describe, expect, test } from "bun:test";

describe("hello", () => {
  test("returns exactly 'Hello, world!'", () => {
    expect(hello()).toBe("Hello, world!");
  });
});

import { hello } from "./hello";
import { describe, expect, test } from "bun:test";

describe("hello", () => {
  test("returns Hello, world!", () => {
    expect(hello()).toBe("Hello, world!");
  });
});

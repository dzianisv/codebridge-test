import { test, expect } from "bun:test";
import { hello } from "./hello";

test("hello returns exactly 'Hello, world!'", () => {
  expect(hello()).toBe("Hello, world!");
});

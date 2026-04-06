import { expect, test } from "bun:test";
import { hello } from "./hello.ts";

test("hello returns Hello, world!", () => {
  expect(hello()).toBe("Hello, world!");
});

import { expect, test } from "bun:test";
import { hello } from "./hello.js";

test("hello() returns correct greeting", () => {
  expect(hello()).toBe("Hello, world!");
});

import { describe, it } from "node:test";
import { onSubmit } from "./donation.js";
import assert from "node:assert";

describe("When onSubmit is invoked for Donation", () => {
  it("when you pass a string value for 0", () => {
    const val = onSubmit("0");
    assert.strictEqual(val, "No donation, no problem");
  });

  it("when you pass 0 as a number", () => {
    const val = onSubmit(0);
    assert.strictEqual(val, "No donation, no problem");
  });

  it("when you pass a number greater than 0", () => {
    const val = onSubmit(10);
    assert.strictEqual(val, "Thanks for donation");
  });

  it("when you pass an empty string for donation", () => {
    const val = onSubmit("");
    assert.strictEqual(val, "Want to donate?");
  });

  it("when you pass an invalid number", () => {
    const val = onSubmit("abc");
    assert.strictEqual(val, "Invalid input");
  });
  it("when you pass a negative number", () => {
    const val = onSubmit(-10);
    assert.strictEqual(val, "Invalid input");
  });
});

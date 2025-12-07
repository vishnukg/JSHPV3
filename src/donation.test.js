import { describe, it, assert } from "vitest";
import { onSubmission } from "./donation.js";

describe("When onSubmit is invoked for Donation", () => {
  it("when you pass a string value for 0", () => {
    const val = onSubmission("0");
    assert.strictEqual(val, "No donation, no problem");
  });

  it("when you pass 0 as a number", () => {
    const val = onSubmission(0);
    assert.strictEqual(val, "No donation, no problem");
  });

  it("when you pass a number greater than 0", () => {
    const val = onSubmission(10);
    assert.strictEqual(val, "Thanks for donation");
  });

  it("when you pass an empty string for donation", () => {
    const val = onSubmission("");
    assert.strictEqual(val, "Want to donate?");
  });

  it("when you pass an invalid number", () => {
    const val = onSubmission("abc");
    assert.strictEqual(val, "Invalid input");
  });
  it("when you pass a negative number", () => {
    const val = onSubmission(-10);
    assert.strictEqual(val, "Invalid input");
  });
});

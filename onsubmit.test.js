import { describe, it } from "node:test";
import { onSubmit } from "./onsubmit.js";
import assert from "node:assert";

describe(" Onsubmit function", () => {
  it("when you pass a string value for 0", () => {
    const val = onSubmit("0");
    assert.strictEqual(val, "No donation, no problem");
  });

  it("when you pass 0 as a number", async () => {
    const val = onSubmit(0);
    assert.strictEqual(val, "No donation, no problem");
  });

  it("when you pass a number greater than 0", async () => {
    const val = onSubmit(10);
    assert.strictEqual(val, "Thanks for donation");
  });

  it("when you pass an empty string for donation", async () => {
    const val = onSubmit("");
    assert.strictEqual(val, "Want to donate?");
  });
});

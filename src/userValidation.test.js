import { describe, it } from "node:test";
import { onSubmit } from "./userValidation.js";
import assert from "node:assert";

describe("When onSubmit is invoked for userValidation", () => {
  it("if userStore and userSubmitted are same", () => {
    const result = onSubmit();

    assert.strictEqual(result, "same user");
  });
});

import { describe, it } from "node:test";
import assert from "node:assert";
import { GetUser } from "./user.js";
import {
  CompareUsersById,
  CompareUsersByName,
  CompareUsersByBuiltInMethod,
} from "./userComparer.js";

describe("UserComparer", () => {
  it("When two users are compared by ID", () => {
    const user1 = GetUser("will", 105);
    const user2 = GetUser("will", 105);

    const result = CompareUsersById(user1, user2);

    assert.strictEqual(result, "Users have same id");
  });

  it("When two users are compared by name", () => {
    const user1 = GetUser("will", 105);
    const user2 = GetUser("will", 105);

    const result = CompareUsersByName(user1, user2);

    assert.strictEqual(result, "Users have same name");
  });

  it("When two users are compared by built in method", () => {
    const user1 = GetUser("will", 105);
    const user2 = GetUser("will", 105);

    const result = CompareUsersByBuiltInMethod(user1, user2);

    assert.strictEqual(result, "Users are deeply equal");
  });
});

import { isDeepStrictEqual } from "node:util";

export const CompareUsersById = (user1, user2) => {
  if (+user1 === +user2) {
    return "Users have same id";
  } else {
    return "users dont match";
  }
};

export const CompareUsersByName = (user1, user2) => {
  if (`${user1}` === `${user2}`) {
    return "Users have same name";
  }
};

export const CompareUsersByBuiltInMethod = (user1, user2) => {
  if (isDeepStrictEqual(user1, user2)) return "Users are deeply equal";
};

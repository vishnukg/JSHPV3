const userStored = { name: "Will", id: 105 };
const userSubmitted = { name: "Will", id: 105 };

export const onSubmit = () => {
  if (+userStored === +userSubmitted) {
    return "same user";
  }
};

export const coerce = (hint) => {
  if (hint === "string") return "user";
  if (hint === "number") return 105;
};

userStored[Symbol.toPrimitive] = coerce;
userSubmitted[Symbol.toPrimitive] = coerce;

export const GetUser = (name, id) => {
  const user = {
    name: name,
    id: id,
  };
  user[Symbol.toPrimitive] = coerce;
  return user;
};

function coerce(hint) {
  if (hint === "string") return this.name;
  if (hint === "number") return this.id;
}

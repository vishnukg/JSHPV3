const createIterator = (arr) => {
  let i = 0;
  const innerObject = {
    next: () => {
      if (i < arr.length) {
        const result = arr[i];
        i++;
        return result;
      } else return "Cannot access outside array length";
    },
  };
  return innerObject;
};

const iterator = createIterator([1, 2, 3, 4]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

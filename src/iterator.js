const createFetchNext = (arr) => {
  let i = 0;
  const fetchNextElement = () => {
    const result = arr[i];
    if (i <= arr.length) {
      ++i;
      return result;
    }
  };
  return fetchNextElement;
};

const fetchNext = createFetchNext([1, 2, 3]);

console.log(fetchNext());
console.log(fetchNext());
console.log(fetchNext());

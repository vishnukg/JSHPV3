function* generator() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const returnNextElement = generator();
console.log(returnNextElement.next());
console.log(returnNextElement.next());
console.log(returnNextElement.next());
console.log(returnNextElement.next());

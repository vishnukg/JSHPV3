function doWhenDataReceived(value) {
  console.log(returnNextElement.next(value));
  console.log(returnNextElement.next());
}
function* createFlow() {
  const data = yield fetch("https://www.google.com");
  yield data.status;
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next().value;

futureData.then(doWhenDataReceived);
console.log("Final print");

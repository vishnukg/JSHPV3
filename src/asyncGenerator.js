function doWhenDataReceived(value) {
  returnNextElement.next(value);
}
function* createFlow() {
  const data = yield fetch("https://www.google.com");
  console.log(data.status);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next().value;

futureData.then(doWhenDataReceived);

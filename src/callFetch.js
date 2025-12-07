const display = (data) => console.log(data.status);

setTimeout(() => console.log("Timeout finished"), 0);
const futureData = fetch("https://www.google.com");
futureData.then(display);

// Promise.resolve().then(() => {
//   console.log("Promise resolved");
// });
for (let index = 0; index < 100000; index++) {
  console.log("loop");
}

console.log("Me first!");

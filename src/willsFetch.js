function display(data) {
  console.log(data);
}

function printHello() {
  console.log("hello");
}
function Block() {
  for (let ind = 0; ind < 100000; ind++) {
    console.log("Loop");
  }
}

setTimeout(printHello, 0);

const futureData = fetch("https://www.google.com");
futureData.then(display);

Block();
console.log("Me First!");

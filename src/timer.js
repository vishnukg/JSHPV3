const printHello = () => console.log("Hello");

setTimeout(printHello, 0);

for (let index = 0; index < 1000000; index++) {
  console.log("loop");
}
console.log("Me First!");

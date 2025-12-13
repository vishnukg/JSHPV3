const createFlow = () => {
  console.log("Inside Async");
  const data = fetch("https://www.google.com");
  data.then((data) => {
    console.log(data.status);
  });
  console.log("Finished async");
};

createFlow();
console.log("sync log");

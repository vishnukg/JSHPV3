const createFlow = async () => {
  console.log("Inside Async");
  const data = await fetch("https://www.google.com");
  console.log(data.status);
};

createFlow();
console.log("sync log");

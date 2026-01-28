// Day 15: JavaScript async / await

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Data received successfully");
    }, 2000);
  });
}

async function fetchData() {
  try {
    console.log("Fetching data...");
    let result = await getData();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();

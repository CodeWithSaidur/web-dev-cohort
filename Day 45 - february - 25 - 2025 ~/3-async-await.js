async function fetchData() {
  try {
    console.log("Fetching data...");
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Fetch operation completed.");
  }
}

fetchData()
  .then(() => {
    console.log("Then");
  })
  .catch(() => {
    console.log("Catch");
  })
  .finally(() => {
    console.log("Finally");
  });


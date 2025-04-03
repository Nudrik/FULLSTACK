// Asynchronous Behaviour of Javascript
// Few Asynchrous operations
// fetch(), fs.read(), setTIimeout(), setInterval()
// console.log("Hello");
// let count = 0;
// for (let i = 0; i < 100; i++) {
//   count = count + i;
// }
// console.log(count);
// setTimeout(() => {
//   console.log("After 3 seconds");
// }, 3000);
// console.log("Bye");

// Handling the Asynchrounous Operations

// Promises - object which handles asynchronous operations
// new Promise((resolve, reject)=>{asynchronous operations})

function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isTask1Done = true;
      if (isTask1Done) {
        console.log("Task 1 is done");
        resolve();
      } else {
        reject("Task1 is not done");
      }
    }, 3000);
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 2 is done");
      resolve();
    }, 1500);
  });
}

// async/await

function excecuteAlltasks() {
  try {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) =>{ 
        return data.json()
      })
      .then((val) => console.log(val));
  } catch (error) {
    console.log(error);
  }
}
excecuteAlltasks();

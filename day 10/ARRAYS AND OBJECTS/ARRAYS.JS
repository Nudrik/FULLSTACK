
const numbers = [10, 25, 32, 47, 50, 63, 78, 89, 90, 101];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of all numbers:", sum);
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
const includes47 = numbers.includes(47);
console.log("Includes 47:", includes47);
const firstGreaterThan60 = numbers.find(num => num > 60);
console.log("First number greater than 60:", firstGreaterThan60);
const sortedDescending = [...numbers].sort((a, b) => b - a);
console.log("Sorted in descending order:", sortedDescending);
const student = {
  name: "Arvind",
  age: 26,
  subjects: ["Math", "Physics", "Computer Science"],
  scores: {
    Math: 85,
    Physics: 78,
    ComputerScience: 92
  },
  isGraduated: false
};
student.name = "Ram";
console.log("Updated student name:", student.name);
student.subjects.push("Biology");
console.log("Updated subjects:", student.subjects);
const highestScore = Math.max(...Object.values(student.scores));
console.log("Highest score:", highestScore);
delete student.scores.Physics;
console.log("Updated scores:", student.scores);
const includesBiology = student.subjects.includes("Biology");
console.log("Includes Biology:", includesBiology);

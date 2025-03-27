const student = {
  name: "Ram", // Updated name
  age: 26,
  subjects: ["Math", "Physics", "Computer Science", "Biology"], // Added Biology
  scores: {
    Math: 85,
    Physics: 78,
    ComputerScience: 92
  },
  isGraduated: false
};

// Finding the highest score
const highestScore = Math.max(...Object.values(student.scores));
console.log("Highest Score:", highestScore);

// Deleting the Physics property
delete student.scores.Physics;

// Checking if Biology exists in the subjects array
const hasBiology = student.subjects.includes("Biology");
console.log("Does the student have Biology as a subject?", hasBiology);

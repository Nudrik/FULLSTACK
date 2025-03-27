const student = {
  name: "Ram", 
  age: 26,
  subjects: ["Math", "Physics", "Computer Science", "Biology"],
  scores: {
    Math: 85,
    Physics: 78,
    ComputerScience: 92
  },
  isGraduated: false
};

const highestScore = Math.max(...Object.values(student.scores));
console.log("Highest Score:", highestScore);

delete student.scores.Physics;

const hasBiology = student.subjects.includes("Biology");
console.log("Does the student have Biology as a subject?", hasBiology);

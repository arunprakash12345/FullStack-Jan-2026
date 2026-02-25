const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 60 },
  { name: "David", score: 85 },
  { name: "Eve", score: 70 },
];

// Write a function that groups them into categories:
// "A" (90-100)
// "B" (75-89)
// "C" (below 75)

// Return an object like:

// {
//   A: ["Alice"],
//   B: ["Bob", "David"],
//   C: ["Charlie", "Eve"]
//   }

function groupStudentsByGrade(students) {
  const categories = {
    A: [],
    B: [],
    C: [],
  };
  for (const student of students) {
    const score = student.score;
    if (score >= 90) {
      categories?.A?.push(student.name);
    } else if (score >= 75) {
      categories?.B?.push(student.name);
    } else {
      categories?.C?.push(student.name);
    }
  }
  return categories;
}

console.log(groupStudentsByGrade(students));

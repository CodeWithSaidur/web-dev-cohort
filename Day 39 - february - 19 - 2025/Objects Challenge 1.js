function createStudentProfile(name, age, grade) {
  const grade_regex = /^[1-9]th|1[0-2]th$/;

  if (typeof name === "string" && age > 5 && grade_regex.test(grade)) {
    return { name, age, grade };
  } else {
    return "Invalid input";
  }
}

// Example usage:
const student = createStudentProfile("John Doe", 15, "10th");
console.log(student); // Output: { name: "John Doe", age: 15, grade: 9 }

// The .test() method is a built-in JavaScript function for regular expressions. It:
// Returns true if the grade matches the gradePattern.
// Returns false if it does not.
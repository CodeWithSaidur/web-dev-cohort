// 90 >= A
// 80 - B
// 70 - C
// 60 >= D
// F

// factory tempate

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

let grade = calculateGrade(80);
console.log(grade);

console.log(calculateGrade(70))

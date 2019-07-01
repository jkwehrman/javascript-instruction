let grade = 0;
let letterGrade = "A";
if (grade >= 88) {
    letterGrade = "A";
    console.log("Letter grade: " + letterGrade);
}  
if (grade >= 80 && grade <= 87  ) {
    letterGrade = "B";
    console.log("Letter grade: " + letterGrade);
} 
if (grade >= 67 && grade <= 79  )  {
    letterGrade = "C";
    console.log("Letter grade: " + letterGrade);
} 
if (grade >= 60 && grade <= 67  )  {
    letterGrade = "D";
    console.log("Letter grade: " + letterGrade);
}
if (grade <= 60  )  {
    letterGrade = "F - you failed this class!";
    console.log("Letter grade: " + letterGrade);
} 
console.log("Question 3");

let marks = prompt("Enter Marks : ", 50);

// Using Conditional Statements

console.log("Using Conditional Statements : ");
if (marks >= 70 && marks <=100) {
    console.log(`Marks are ${marks} and Grade is A`);
} else if (marks >= 50 && marks <70) {
    console.log(`Marks are ${marks} and Grade is B`);
}else if (marks >= 30 && marks <50) {
    console.log(`Marks are ${marks} and Grade is C`);
}else if(marks >= 0 && marks <30){
    console.log(`Marks are ${marks} and Grade is D`);
}else {
    console.log("Enter Valid Marks");
}

// Using Switch Statement

console.log("Using Switch Statement");

let grade = ''
if (marks >= 70 && marks <=100) {
    grade = 'A'
} else if (marks >= 50 && marks <70) {
    grade = 'B'
}else if (marks >= 30 && marks <50) {
    grade = 'C'
}else if(marks >= 0 && marks <30){
    grade = 'D'
}else {
    grade = 'default'
}

switch (grade) {
    case 'A':
        console.log(`Marks are ${marks} and Grade is A`);
        break;
    case 'B':
        console.log(`Marks are ${marks} and Grade is B`);
        break;
    case 'C':
        console.log(`Marks are ${marks} and Grade is C`);
        break;
    case 'D':
        console.log(`Marks are ${marks} and Grade is D`);
        break;    

    default:
        console.log("Enter Valid Marks");
        break;
}


// Using Ternary Operator

console.log("Using Ternary Operator");

let calcGrade =  marks >= 70 && marks <=100 ? 'A' :
                 marks >= 50 && marks <70 ? 'B' :  
                 marks >= 30 && marks <50 ? 'C' :
                 marks >= 0 && marks <30 ? 'D' :
                 'Enter Valid Marks';


 console.log(`Marks are ${marks} and Grade is ${calcGrade}`);
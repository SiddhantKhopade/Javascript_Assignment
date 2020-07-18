console.log("Question 1");

let num = prompt("Type any Number : ", 0);

function oddEven(num) {
    
    if (num % 2 == 0) {
        return 'Even'
    } else {
       return 'Odd' 
    }
}

result = oddEven(num)

console.log('The number is : ', result);
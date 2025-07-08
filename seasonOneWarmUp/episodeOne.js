//Functions , If Else : 

//Declaration of a function : 
function PrintHelloWorld() {
    console.log('Hello World');
}

// Calling a function :
// PrintHelloWorld();

//function which takes a parameter and returns a value
function square(x){
    let result = x * x;
    return result;
}

// Calling a function with an argument
// and storing the returned value in a variable
let value = square(5);

// console.log(value); // 25



// If Else statement

function eligibleAgeToVote(age){
    if(age < 0){
        console.log("Age cannot be less than 1");
    }
    else if(age < 18){
        console.log("You are not eligible to vote");
    }else{
        console.log("You are eligible to vote");
    }
}

eligibleAgeToVote(16); // You are not eligible to vote
eligibleAgeToVote(20); // You are eligible to vote
eligibleAgeToVote(-23 ); // You are not eligible to vote
eligibleAgeToVote("45"); // You are eligible to vote

// functio to check if a number is even or odd
function isEvenOrOdd(num){
     if(num % 2 === 0){
        console.log('Even');
     }else{
        console.log('Odd');
     }
}

isEvenOrOdd(5); // Odd
isEvenOrOdd(66); // Even
isEvenOrOdd(0); // Even
isEvenOrOdd(-2); // Even





// Loop - 02


//Q1 : write a function that searches for an eklement in an array and returns its index if found or -1 if not found
let arr = [1,2,3,4,5];

function search(n){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === n){
            return i;
        }
    }
     return -1;
}

console.log(search(5));
console.log(search(6));


//Q2: write a function that returns the number of negative number in an array

let arr2 = [1,-2,3,-4,0,-5, 56, 6];
let positiveNumber = [];
let negativeNumber = [];

function countNegativeNumberInAnArray(arr){
   let count = 0;
   for(let i=0;i<arr.length; i++){
    if(arr[i] > 0){
        positiveNumber.push(arr[i]);
    }else if(arr[i] < 0){
        negativeNumber.push(arr[i]);
        count = negativeNumber.length;
    }
   }
   return `Total negative number in an array is ${count}`;
}

console.log(countNegativeNumberInAnArray(arr2));


function countNeg(arr){
    let count = 0;
    for(let i=0;i< arr.length; i++){
        if(arr[i] < 0){
            count = count + 1;
        }
    }
    return count;
}

console.log(countNeg(arr2));


//Q3: Find the largest number in an array

let arrLar = [-2,-3,-4,-5];
function largestNumber(arr){
    let largestNumber = -Infinity;  // or we could have used arr[0]
    for(let i=0; i< arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    return `Largest Number is ${largestNumber}`;
}

console.log(largestNumber(arrLar));



// H.W : Q4:

function smallestNumberInAnArray(arr){
    let smallNum = Infinity; // or we could use arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < smallNum){
            smallNum = arr[i];
        }
    }
    return `smallest number in this array is ${smallNum}`;
}

let arrq= [2,3,45,6,788,-3];
console.log(smallestNumberInAnArray(arrq));
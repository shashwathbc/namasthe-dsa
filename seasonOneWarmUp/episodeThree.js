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


//Q3:

function largestNumber(arr){
    let largestNumber = 0;
    for(let i=0; i< arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i];
        }
    }
    return `Largest Number is ${largestNumber}`;
}

console.log(largestNumber(arr2));
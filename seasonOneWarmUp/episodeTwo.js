// Loop 

// Tow tyopes of loops
// 1. For loop
// 2. While loop


// For loop : 

// this for loop prints shash 20 times
for(let i = 0; i< 20; i++){
    console.log('Shash');
}


for(let i = 0; i < 4; i = i+1) {
    // this for loop prints shash two times
  console.log('Shash two'); //
}


//print all even/ odd numbers from the array : 

let arr = [1,2,3,4,5,6,7,8,9,10];


let even = [];
let odd = [];

for(let i =0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
        even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
}


console.log('Even : ', even);
console.log('Odd : ', odd);

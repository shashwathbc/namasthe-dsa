//count digit

// Initial values:
// count = 0

// n = 10

// Iteration 1:
// Condition: n > 0 → 10 > 0 ✅

// n = Math.floor(10 / 10) → n = 1

// count = 0 + 1 → count = 1

// Iteration 2:
// Condition: n > 0 → 1 > 0 ✅

// n = Math.floor(1 / 10) → n = 0

// count = 1 + 1 → count = 2

// Iteration 3:
// Condition: n > 0 → 0 > 0 ❌ → loop exits

// Final Output:
// js
// Copy
// Edit
// console.log(count); // 2

let count = 0
let n = -23;
if(n === 0 ) return console.log(1);
if(n < 0) n = Math.abs(n);
while(n> 0){
    n = Math.floor(n / 10);
    count++;
}
return console.log(count);
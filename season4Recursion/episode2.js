// SUM OF FIRST N NUMBERS 
// sum =  n + sum(n-1);


// const sum = (n) => {
//    if(n === 0 ) return 0;
//    return n + sum(n - 1)
// //    0 + sum(0+1) = 1
// //  1 + sum (1+1) = 2
// }
// console.log(sum(5));
// // 1+ 2 + 3 + 4 + 5 = 15
const sum = (n) => {
   console.log("Function called with n =", n);

   if (n === 0) {
      console.log("Base case reached, returning 0");
      return 0;
   }

   const result = n + sum(n - 1);

   console.log(`Returning ${result} for n = ${n}`);

   return result;
}

console.log("Final Answer:", sum(5));
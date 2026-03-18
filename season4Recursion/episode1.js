// Function that calls itself to solve smaller versions of the same problem is called recursion

// function recusrion(){
//     console.log('Namasthe DSA');
//     recusrion();
// }

// recusrion();

 
// const  printDecending = (n) => {
//   if (n ===0) return;
//   console.log(n);
//   printDecending(n-1);
// } 
// printDecending(5);


// print 1 to n 

const print = (n, value = 1) => {
    if(value > n) return;
    console.log(value);
    value = print(n, value +1);
}
print(5);
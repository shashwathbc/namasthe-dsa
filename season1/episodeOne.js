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



// Arrays & Two Pointers

// 1. Sliding Window: 3, 76, 209, 424, 567, 904  
// 2. Two Pointers: 11, 15, 16, 18, 42, 167  
// 3. Fast/Slow Pointers: 141, 142, 19, 876, 160, 234  
// 4. Binary Search on Sorted Data: 33, 34, 35, 153, 162, 704  
// 5. Binary Search on Answer: 875, 1011, 410, 774, 1283, 1482  
// 6. Hashing / Frequency Maps: 1, 49, 128, 217, 242, 347  
// 7. Prefix Sum / Running Sum: 303, 560, 724, 930, 974, 523  
// 8. Difference Array / Range Updates: 370, 1094, 1109, 1893, 1943, 2381  

// Stacks, Queues & Greedy

// 1. Monotonic Stack: 739, 496, 503, 84, 85, 901  
// 2. Monotonic Queue / Deque: 239, 862, 1425, 1438, 1499, 1696  
// 3. Heap / Top K: 215, 347, 692, 703, 973, 1046  
// 4. Intervals: 56, 57, 252, 253, 435, 452  
// 5. Greedy Scheduling / Sorting: 45, 55, 406, 621, 763, 134  

// Linked Lists & Trees

// 1. Linked List Manipulation: 21, 23, 24, 25, 92, 138  
// 2. Tree DFS: 104, 112, 113, 543, 124, 226  
// 3. Tree BFS / Level Order: 102, 103, 199, 515, 637, 116  
// 4. BST Problems: 98, 99, 230, 235, 450, 700  

// Backtracking & Graphs

// 1. Backtracking Basics: 46, 47, 77, 78, 90, 39  
// 2. Backtracking with Constraints: 40, 17, 79, 131, 51, 52  
// 3. Graph BFS / DFS: 200, 695, 733, 994, 1091, 1254  
// 4. Topological Sort / DAG: 207, 210, 802, 1462, 1203, 2115  
// 5. Union Find / DSU: 547, 684, 1319, 1579, 990, 1202  
// 6. Shortest Path: 743, 787, 1514, 1631, 1334, 1976  
// 7. MST / Graph Greedy: 1584, 1135, 1168, 1489, 778, 1102  

// Advanced Patterns

// 1. Trie: 208, 211, 212, 648, 677, 1268  
// 2. Bit Manipulation: 136, 137, 191, 338, 268, 190  
// 3. 1D DP Basics: 70, 198, 213, 322, 279, 300  
// 4. Knapsack / Subset DP: 416, 494, 518, 474, 1049, 879  
// 5. Grid DP: 62, 63, 64, 221, 931, 120  
// 6. String DP / Sequence DP: 1143, 72, 115, 583, 97, 1312  

// How to use this:

// → Do 3 patterns at a time, not everything together.

// → Solve the first 2 problems to understand the idea.

// → Solve the next 2 to build repetition.

// → Use the last 2 to stretch yourself.

// → After every pattern, write one reusable template from memory.

// → Don’t just “solve and move on.”

// Ask yourself:

// “What signal in the question pointed me toward this approach?”

// If you get stuck, revisit the same pattern after 3-4 days.

// Pattern recognition is built through spacing and repetition, not cramming.

// Save this roadmap.

// Start with the first 3 patterns.


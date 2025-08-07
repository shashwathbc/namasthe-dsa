// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

function checkNonEmpty(n){
 const temp = n[0];
 const duplicates = [];
 for(let i=0;i<n.length;i++){
   if(n[i] !== temp){
     console.log(n[i]);
     duplicates = n[i];
   }
 }

}
checkNonEmpty([4,1,2,1,2]);
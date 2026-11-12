// Binary search

var search = function(nums,target){
    let leftPointer = 0;
    let rightPointer = nums.length -1;

    while(rightPointer > leftPointer) {

      //calculate middel element 
      let middle = Math.floor((leftPointer + rightPointer)/2);

      //check for middle 
      if(target === nums[middle]){
        return middle;
      }
      //check for less than middle 
      else if(target < nums[middle]){
         rightPointer = middle -1;
      }
      else{
        leftPointer = middle +1;
      }
    }
    // base case 
    return -1;
};

let result = search([-1,2,4,5,6,8,9], 77);
console.log(result);
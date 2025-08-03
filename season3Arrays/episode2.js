// remove an element from an array:

function removeElement(nums, val){
  let x = 0;
  for(let i=0;i<nums.length; i++){
    if(nums[i] !== val){
        nums[x] = nums[i];
        x = x+1;
    }
  }
      console.log('x',x);
    console.log('nums',nums);
}
removeElement([3,2,2,3,3,3], 3);
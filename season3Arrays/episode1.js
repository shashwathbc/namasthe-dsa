// Remove duplicates from a sorted array

function removeDuplicate(nums) {
    if (nums.length === 0) return 0;

    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] > nums[x]) {  
            // x = x + 1;
            x++;
            nums[x] = nums[i];
        }
    }
    console.log(x + 1); // Number of unique elements
    console.log(nums.slice(0, x + 1)); // Optional: show the unique array
     console.log(nums); // final nums
};

removeDuplicate([0,0,1,1,1,2,2,3,3,4]);

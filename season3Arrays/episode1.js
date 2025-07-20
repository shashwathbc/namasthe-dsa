// Remove duplicates from a sorted array

function removeDuplicate(nums) {
    if (nums.length === 0) return 0;

    let x = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[x]) {
            // x = x + 1;
            x++;
            nums[x] = nums[i];
        }
    }
    

    console.log(x + 1); // Number of unique elements
    console.log(nums.slice(0, x + 1)); // Optional: show the unique array
}

removeDuplicate([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]);
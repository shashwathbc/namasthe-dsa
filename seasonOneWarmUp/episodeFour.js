//Find the second largest number in an array: 

function findSecondLargestNumberInArray(arr){
   let largestNumber = arr[0];
   let secondLargestNumber = arr[0];
   let newArrayWithoutLargestNumberInArray = arr;
    for(let i=0;i<arr.length;i++){
      if(arr[i] > largestNumber){
        largestNumber = arr[i];
      }
    }
    const newArr = newArrayWithoutLargestNumberInArray.filter((item) => item !== largestNumber);
    console.log('newArrayWithoutLargestNumberInArray',newArrayWithoutLargestNumberInArray,largestNumber)
    for(let j=0;j<newArr.length;j++){
        if(newArr[j] > secondLargestNumber){
            secondLargestNumber = newArr[j];
        }
    }
return `Second largest number in an array is ${secondLargestNumber}`;
}

let arr2 = [-2,3,4,-5,-6];

console.log(findSecondLargestNumberInArray(arr2));


// Second solution : 


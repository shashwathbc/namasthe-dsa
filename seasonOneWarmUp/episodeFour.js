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

let arr2 = [-2,3,4,20,20,-5,-6];

console.log(findSecondLargestNumberInArray(arr2));


// Second solution : 

function findSecondLargest(a){
    if(a.length < 2) return null;
    let fl = -Infinity;
    let sl = -Infinity;
   for(let i=0;i<a.length; i++){
    if(a[i] > fl){
        sl = fl;
        fl = a[i];
    }else if(a[i] > sl && a[i] != fl){
        sl = a[i];
    }
   }
   return `sl ${sl}`
}

console.log(findSecondLargest(arr2));


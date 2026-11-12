// Bubble sort


let arr=[5,2,4,1];
//sorting in accesnding order


var bubbleSort = (arr) => {
let n = arr.length;
    for(let i=0;i<n-1;i++){

        let isSwapped = false;

        for(let j=0;j<n-1-i;j++){
            //if left greater than right then swap
            if(arr[j] > arr[j+1]){
                //create a temp variable to swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
                if(!isSwapped) break;
    }
    return arr;
}

var result = bubbleSort(arr);
console.log(result);
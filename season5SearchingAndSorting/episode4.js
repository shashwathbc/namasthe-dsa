// Selection sort

let arr = [7,1,4,5,3,2];

var selectionSort = (arr) => {

    let n = arr.length;
    for(let i =0; i<n-1; i++){
        //find min in the array 
        let min = i;
        for(let j =i+1; j<n; j++){
            // compare current element
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
          let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
            return arr;
}

let result = selectionSort(arr);
console.log(result);
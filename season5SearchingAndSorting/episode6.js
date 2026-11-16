// MERGE Sort

//merge 2 sorted list into a single list 
let arrone = [1,3,5,7] 
let arrtwo = [2,4,8,9]

let mergeTwoSortedArr = (arrone, arrtwo) => {
    let i = 0;
    let j = 0;
    let result = [];

    // Compare elements from both arrays
    while (i < arrone.length && j < arrtwo.length) {
        if (arrone[i] < arrtwo[j]) {
            result.push(arrone[i]);
            i++;
        } else {
            result.push(arrtwo[j]);
            j++;
        }
    }

    // Add remaining elements from arrone
    while (i < arrone.length) {
        result.push(arrone[i]);
        i++;
    }

    // Add remaining elements from arrtwo
    while (j < arrtwo.length) {
        result.push(arrtwo[j]);
        j++;
    }

    return result;
}

let result = mergeTwoSortedArr(arrone,arrtwo);
console.log(result);
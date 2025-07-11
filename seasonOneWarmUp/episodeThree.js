// Loop - 02

let arr = [1,2,3,4,5];

function search(n){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === n){
            return i;
        }
    }
     return -1;
}

console.log(search(5));
console.log(search(6));
// move zeros:

function movezero(arr){

  let noOfZero = [];
  let arr2= [];
  for(let i=0;i<arr.length;i++){
    // if(arr[i] === 0){
    //   noOfZero[i] = arr[i];
    // }else{
    //   arr2[i] = arr[i];
    // }
     if (arr[i] === 0) {
      noOfZero.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
   const result = arr2.concat(noOfZero);
  console.log(result);
  return result;
}

movezero([0,1,0,3,12]);
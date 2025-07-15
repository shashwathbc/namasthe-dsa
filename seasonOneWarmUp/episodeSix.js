// Star patterns : 

// 1) Problem 1

// ****
// ****
// ****
// ****

for(let i=0;i<4;i++){
    let row = "";
    for(let j=0;j<4;j++){
        row = row + " "+"*";
    }
    console.log(row);

}


// Problem 2 : 

// *
// **
// ***
// ****


for(let i=0;i<4;i++){
    let row2= '';
    for(let j=0;j < i+1;j++){
        row2 = row2 + " " + '*' ;
    }
    console.log(row2);
}



// Problem 3
// 1
// 12
// 123
// 1234

for(let i=0;i<4;i++){
    let row = '';
    for(let j =0;j <i+1;j++){
        row = row + " " + (j+1);
    }
    console.log(row)
}


//problem 4:
// 1
// 22
// 333
// 4444

for(let i=0;i<4;i++){
    let row ='';
    for(let j =0;j< i+1;j++){
        row = row + (i +1);
    }
    console.log(row);
}

//problem 5
// 1234
// 123
// 12
// 1
for(let i=0;i<4;i++){
    let row = '';
    for(let j=0;j<4 - i;j++){
        row = row + (j+1);
    }
    console.log(row);
}


//Problem 6
//    *
//   **
//  ***
// ****
function pattern(n){
    for(let i=0;i<4;i++){
    let row = '';
    for(let j=0;j< 4-(i+1); j++){
        row = row + ' ';
    }
    for(let k=0;k<i+1;k++){
        row = row + '*'
    }
    console.log(row);
}
}

pattern(4);


// problem 7

// 1
// 10
// 101
// 1010

for(let i=0;i<4;i++){
    let row = '';
    let switchVal =1;
    for(let j =0;j<i+1;j++){
        row = row + switchVal;
        if(switchVal === 1){
            switchVal = 0;
        }else{
            switchVal =1;
        }
    }
    console.log(row)
}


// problem 8

  let switchVal =1;
for(let i=0;i<4;i++){
    let row = '';

    for(let j =0;j<i+1;j++){
        row = row + switchVal;
        if(switchVal === 1){
            switchVal = 0;
        }else{
            switchVal =1;
        }
    }
    console.log(row)
}
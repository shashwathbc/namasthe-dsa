// reverse string

// function reverseString(s){
//    let reverse = [];
//    reverse = s.reverse();
//    console.log(reverse);
// }

// reverseString(['s','h','a','s','h'])


function reverseString(s){
   // run a half loop start i with 0 till n/2
   let len = s.length;
    let halfLen = Math.floor(len/2);

    for(let i =0; i< halfLen; i++){
        let temp = s[i];
        s[i] = s[len -1-i];
        s[len -1-i] = temp;
    }
   
}


reverseString(['s','h','a','s','h'])
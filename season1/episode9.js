// reverse integer 


function reverseInteger(num){
 
    let nCopy = num;
    let rev = 0;
    num = Math.abs(num);

    while(num > 0){
        let rem = num % 10;
        rev = (10 * rev) + rem;
        num = Math.floor(num / 10);
    }

    let limit = Math.pow(2,31);

    if(rev < -limit || rev > limit) return console.log(0);
    

    console.log(nCopy < 0 ? -rev : rev);

}



// reverseInteger(123);
// reverseInteger(123454);
reverseInteger(12987987987987987987987897980); 
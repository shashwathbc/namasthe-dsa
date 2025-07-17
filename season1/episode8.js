// palindrome 


// function palindrome(n){
//     const reverseNum = n.toString().split('').reverse().join('');
//    if(reverseNum === n.toString()){
//     console.log('Its a palindrome');
//    }else{
//     console.log('Its not a palindrome');
//    }
// }

// palindrome(141);
// palindrome(23);
// palindrome(-141);

function palindrome(n){
    let originalVal= n;
    let rev = 0;

    while(n > 0){
        let rem = n % 10;
        rev = (10 * rev) + rem; 
        n = Math.floor(n / 10); 
    }
     console.log('origonalval', n, originalVal, 'rev', rev);
     if (originalVal < 0) return console.log('Its not a palindrome')
     if(originalVal === rev){
        console.log('Its a palindrome');
    }else{
        console.log('Its not a palindrome');
    }
}

palindrome(141);
palindrome(123);
palindrome(-141);
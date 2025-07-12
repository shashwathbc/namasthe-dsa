// loops within a loop


//for every i value j will run again for all values [0,1,2]
for(let i= 0; i<3;i++){
   for(let j=0;j<3;j++){
       console.log('i',i,'j',j);
   }
}


for(let i=0;i<3;i++){
    for(let j=0; j<i;j++){
        console.log('i',i,'j',j);
    }
}


for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        console.log('i',i,'j',j);
    }
}

for(let i=0;i<3;i++){
    for(let j=i; j>0;j--){
        console.log('i',i,'j',j);
    }
}

for(let i=0;i<3;i++){
    for(let j=i; j>=0;j--){
        console.log('i',i,'j',j);
    }
}


for(i=5;i>0;i--){
  for(let j=0;j<i;j++){
    console.log('j',j, 'i',i);
  }
}
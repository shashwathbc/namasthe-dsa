// merge 

function merge(nums1, nums2, m , n){
// let ans = [];

// for(let i = 0; i < m; i++){
//   ans.push(nums1[i]);
// }
// for(let i = 0; i < n; i++){
//   ans.push(nums2[i]);
// }
let i =0, j=0, l = m+n;
  let c= []
  for (x= 0; x<l; x++) {
    if ((nums1[i] <= nums2[j] && i < m) || j >= n) {
        c.push(nums1[i])
        i++
    } else if ((nums2[j] < nums1[i] && j < n) || i >= m) {
        c.push(nums2[j])
        j++
    } else {
       
    }
  }
  // return c

  console.log(c);

}

merge([1,2,3,0,0,0],[2,5,6], 3, 3);


 let nums1Copy = nums1.slice(0,m);
   let p1 = 0;
   let p2 = 0;

   for(let i =0;i<m+n;i++){
    if(p2 >= n || ( p1 < m && nums1Copy[p1] < nums2[p2])){
        nums1[i] = nums1Copy[p1];
        p1++;
    }else{
        nums1[i] = nums2[p2];
        p2++;
    }
   }
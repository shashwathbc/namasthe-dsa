// shares profit

// function maxProfit(prices) {
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             const profit = prices[j] - prices[i];
//             if (profit > maxProfit) {
//                 maxProfit = profit;
//             }
//         }
//     }

//     return maxProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (buy at 1, sell at 6)
// console.log(maxProfit([7, 6, 4, 3, 1]));    // Output: 0 (no profit)


// function minMax(p){
//   let max = p[0];
//   let min = p[0];

//   for(let i=0; i<p.length; i++ ){
//     if(p[i] < min){
//         min = p[i];
//     }
//     if(p[i] > max){
//         max = p[i];
//     }
//   }
//   return console.log(min, max, 'max: ', max-min);
// };

// minMax([7,1,5,3,6,4]);

//  let minPrice = Infinity;
//     let maxProfit = 0;

//     for (let i = 0; i < prices.length; i++) {
//         // Update the minimum price so far
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         } 
//         // Calculate profit if sold today and update maxProfit
//         else if (prices[i] - minPrice > maxProfit) {
//             maxProfit = prices[i] - minPrice;
//         }
//     }

//     return maxProfit;

// }

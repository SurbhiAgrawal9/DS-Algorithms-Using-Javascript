// checking pair which sum is zero
//[p1,p2] ===0
with for of loop

`js
function getSumPair(array){

  for(let number of array){
    for(let j=1;j<array.length;j++){
      if(number + array[j] ===0){
        return [number,array[j]];
      }
    }
  }
}



let result = getSumPair([-5,-4,-3,-2,0,1,2,4,,6,8]);
console.log(result)
`


//with normal for loop 
// function getSumPair(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] + array[j] === 0) {
//         return [array[i], array[j]];
//       }
//     }
//   }
// }
// let result = getSumPair([-5, -4, -3, -2, 0, 1, 2, 4, 8, 6]);
// console.log(result);

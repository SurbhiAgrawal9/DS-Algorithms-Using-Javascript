// find the value which sum is zero

let count = [-5,3,-6,4,0,-2,8,0,6]
let  arr = count.sort((a,b) => a-b)
// console.log(Arr)
function pairSumZero(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
        return [arr[left],arr[right]]
      } else if(sum > 0){
        right--;
      }
        else {
          left++;
        }

    }
    
}

let result = pairSumZero(arr)
console.log(result)

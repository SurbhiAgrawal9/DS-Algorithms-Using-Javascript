
let  arr = [1,2,5,8,4,7,10]
let arrSize = 7
function sortEvenOld(arr, arrSize){
let arr1 = [];
let arr2 = [];
for(let i=0;i<arrSize;i++){
  if(arr[i] %2 ===0){
    arr1.push(arr[i]);
  } else {
    arr2.push(arr[i]);
  }
    
}
    arr1.sort();
    arr2.sort();
    return [...arr1, ...arr2];
}


console.log(sortEvenOld(arr, arrSize))


// counting  value of the unique element
  let arr = [1,1,2,3,4,5,6,7,7,8,8]
function countUnique(array){
     
  if(array.length){
    let i =0
    for(let j =1;j<array.length;j++){
         if(array[i] !== array[j]){
           i++;
           array[i] = array[j];
         }
         
        }
        return i+1     

   
  }
    else {
      throw new Error("array is empty")
    }

}

const result = countUnique(arr)
console.log(result)

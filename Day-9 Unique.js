In this example, we will be using the set() method to remove duplicates from the array.

let Arr = [
  "DS", "Algo", "OS", "HTML", "DS",
  "OS", "Java", "HTML", "Algo"
];

let outputArray = [];

function removeArray(arr){
    let outputArray = Array.from(new Set(arr))
     return outputArray
}

console.log(removeArray(Arr));


// given vector
let v = [12, 35, 1, 10, 34, 1];
 
// insertig all the element from vector v to set s.
let s = [];
for(let i = 0; i<v.length; i++) s.push(v[i]);
 
// clear the vector
v = [];
s.sort();
 
// insert all element back in vector  in sorted order
s.forEach(function(value){
    v.push(value);
})
 
// the size of updated vector
let n = v.length;
 
// pringing the second largest element in vector
console.log("The Second largest element in vector is : " + v[n-2]);

function add(accumulator, a) {
    return accumulator + a;
}
const sum = [1, 2, 3].reduce(add, 0);
console.log(sum); // Output: 6

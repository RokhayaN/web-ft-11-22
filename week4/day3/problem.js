const numbers = [1, 2, 3, 6, 9, 7, 3, 6, 9, 5, 0, 6, 34, 0, 0, 2, 0, 4, 0];
// in javascript
// remove all zeros
// sort the list in descending order
// at the very end, add your name to the end of the array as a string
// return that array

function problem(arr) {
let NoZeroArr = arr.filter(el => el !== 0)
.sort((a,b) => (b - a))

NoZeroArr.push("rokhaya")
console.log(NoZeroArr)


//return arr
}
problem(numbers)







let array = [2,1,5,2,3,3,4]

let duplicates = array => array.filter((num, index) => array.indexOf(num) !== index)
const duplinums = duplicates(array);
console.log(duplinums);
let firstDupliNum = duplinums[0];
console.log(firstDupliNum);


duplicates(array);
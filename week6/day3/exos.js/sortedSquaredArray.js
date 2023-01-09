array = [0,5,-5,7,8,2]

const sortedSquaredArray = (arr) => {
    let ascArr = arr.sort((a, b) => a - b);
    console.log(ascArr);
ascArr.map(x => x);
return ascArr
}

sortedSquaredArray(array);
function moveZeros(arr) {
    /*
        counting all zeros, not including string zeros. Define a new array with a length of zeroCount
        and fill it with zeros. Iterate through a reversed input and insert and insert the rest of the
        values at the beginning of the new array, infront of the zeros.
    */
    let zeroString = arr.filter(x => x === '0').length
    let zeroCount = (arr.join('').split('0').length - 1) - zeroString;
    
    let result = Array(zeroCount).fill(0);
    arr = arr.reverse();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0)
            continue;
        
        result.unshift(arr[i])
    }

    return result
}

let arr = [1,2,'0',1,0,1,'0',3,0,1];
console.log(moveZeros(arr))
module.exports = moveZeros;
function difference(start, end) {
    let result = 0;
    if (start < 0){
        result = start - end;
        result = Math.abs(result);
    }
    else {
        result = end - start;
    }
    return result;
}

function setId(diff){
    let length = Math.floor(Math.log10(diff));
    let id = 1;

    for (let i = 1; i < length; i++) {
        id = id * 9 + Math.pow(10, i);
    }
    return id;
}

function dontGiveMeFive(start, end){
    let diff = difference(start, end);
    let placeValue = Math.floor(Math.log10(diff));
    let count = 0;
    let id = setId(diff);
    let first = String(diff).charAt(0);

    for (let i = placeValue; i > 0; i--){
        if (first == 5){
            count += parseInt(String(diff).slice(1));
        }
        console.log(diff + ' ' + placeValue)
        count += first * id;
        diff = diff % 10;
        first = String(diff).charAt(0);
        placeValue = Math.floor(Math.log10(diff));
        i = placeValue;
        
        id = (id - Math.pow(10, placeValue)) / 9;

        if (placeValue == 0 && diff == 5){
            count++;
        }
    }
    return difference(start, end) - count;
}
let num = 54321;
console.log(dontGiveMeFive(-4045, 2575));
module.exports = dontGiveMeFive;
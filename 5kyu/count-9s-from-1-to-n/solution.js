// return the number of 9's used to count out 1 to n
function number9(n)
{
    
    let count = 0;
    let digitsToString = String(n);
    let powerOf10 = digitsToString.length -1;

    for (let i = powerOf10; i > 0; i--) {
        if (i == 1){
            if (digitsToString === '9'){
                count++;
                break;
            }
        }
        else{
            break;
        }
            
        count += i * parseInt(digitsToString[0]) * ((Math.pow(10, i)) / 10);
        digitsToString = String(n % Math.pow(10, i))
    }
    return count;
}
//console.log(5 * (Math.pow(10, 5) / 10))

console.log(number9(19))
module.exports = number9;
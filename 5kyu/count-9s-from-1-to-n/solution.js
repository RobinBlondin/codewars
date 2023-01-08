
function number9(n)
{
    /*
        If the input is a one digit number, this block will return an answer immediately.
    */
    if (n == 9){
        return 1;
    }
    else if (n < 9)
        return 0;
    /*
        Set a count variable to catch all nines. placeValue will store how many 'zeroes'  a number has,
        for example the number 9345, which is in the thousands, have 3 'zeroes'. first will hold the first
        digit, so for 9345 first would be 9.
    */
    let count = 0;
    let placeValue = Math.floor(Math.log10(n));
    let first = parseInt(String(n).charAt(0))

    for (let i = placeValue; i > 0; i--) {
        /*
            If the first digit of the input is 9, this will add the rest of the number to count, + itself, because first is a nine as well, 
            since all the remaining numbers will include at least one nine. For an input of 9345, the last 345 numbers all contain one extra nine.
            So in this case we add 346 to count.
        */
        if (first == 9){
            count += parseInt(String(n).slice(1)) + 1;
        }
        /*
            Count will be added with the correct amount of nines that occurs per placeValue in a number. For an input of 9345, the first iteration 
            should count how many nines there are in 9000.  9 * (placeValue * 100) => 9 * 300 => 2700. Input will be updated with the remainder 
            using the modulus operator. PlaceValue and first will be updated using the new input value.
        */
        count += first * (i * (Math.pow(10, i - 1)));

        n = n % ((Math.pow(10, i)));
        placeValue = Math.floor(Math.log10(n));
        first = parseInt(String(n).charAt(0))
        i = placeValue + 1;
        /*
            If placeValue is 0, it means n are down to one digit and we only need increment count with one if the last digit is a nine.
        */
        if (placeValue == 0){
            if (first == 9){
                count++;
                break;
            }
            else
                break;
        }
    }
    return count;
}
console.log(number9(999))
module.exports = number9;
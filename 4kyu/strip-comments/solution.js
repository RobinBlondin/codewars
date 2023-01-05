function solution(input, markers) 
{
    /*
        This function uses a regex pattern that updates in a for-loop with elements from the inputted
        markers array. It matches a space, followed by markers symbol, followed by any letter or space
        up until next nonletter character. It replaces the match of the string with String.empty.
    */
    let text = input;
    let regex = new RegExp();
    let match = '';

    for (let i = 0; i < markers.length; i++) 
    {
      regex = new RegExp(" \\" + markers[i] + "[a-zA-Z ]+");
      match = text.match(regex);
      text = text.replace(match, "");
    }
    return text.trimEnd();
}

module.exports = solution;
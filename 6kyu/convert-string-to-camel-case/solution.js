function toCamelCase(str)
{
    if (str == '')
        return str;

    let regex = new RegExp('[-_]');
    str = str.replaceAll(str.match(regex), ' ');
    input = str.replaceAll(str.match(regex), ' ').split(' ');

    for (let i = 1; i < input.length; i++) 
    {
        input[i] = input[i][0].toUpperCase() + input[i].substring(1);
        
    }
    return input.join('');
}
toCamelCase('the_stealth-warrior');
module.exports = toCamelCase;
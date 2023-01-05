function wave(str)
{
  /*
  This function will split the input string into a new array of letters. It then iterates 
  through each letter and make the char at the current index to uppercase, then pushing the joined
  array into the result array. It then makes the letter back to lowercase for the next cycle of the
  loop.
  */
  let strArr = str.split('');
  let result = [];
  
  if (str.length == 0)
    return result;
  
  for (let i = 0; i < str.length; i++)
  {
    if (strArr[i] == ' ')
      continue;
    
    strArr[i] = strArr[i].toUpperCase();
    result.push(strArr.join(''));
    strArr[i] = strArr[i].toLowerCase();
  }
  return result;
}

module.exports = wave;
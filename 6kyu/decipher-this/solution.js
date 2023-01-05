function swapLetters(input, first, last)
{
  let word = input.split('');

  word[1] = last;
  word[word.length -1] = first;
  return word.join('');
}

function decipherThis(str) 
{
  let input = str;
  let regex = new RegExp(/\d+/)
  
  while (regex.test(input) == true){
    input = input.replace(regex.exec(input)[0], String.fromCharCode(regex.exec(input)[0]));
  }
  
  input = input.split(' ');

  for (let i = 0; i < input.length; i++) {
    if (input[i].length > 2)
      input[i] = swapLetters(input[i], input[i][1], input[i][input[i].length - 1]);
  }
  return input.join(' ');
}

module.exports = decipherThis;
var encryptThis = function(text) {
    if (text == '')
    return text;
  else if (text.length == 1)
    return text.charCodeAt(0).toString();
  
  var input = text;
  var tempStr = '';
  var firstLetters = []
  
  input.split(' ');
  for(let i = 0; i < text.length; i++)
  {
    if (i == 0 || input[i-1] == ' ')
    {
      firstLetters.push(input.charCodeAt(i).toString())

    }
	else
      tempStr += input[i];
  }

 tempStr = tempStr.split(" ").map(word => {
  const len = word.length;
  if (len > 1) {
    word = word[len-1] +  word.substring(1, len-1) + word[0];
  }
  return word;
})

for(let j = 0; j < firstLetters.length; j++)
{
	if (tempStr[j] == ' ')
		continue;

	firstLetters[j] += tempStr[j];
}
  
  return firstLetters.join(' ');
}

module.exports = encryptThis;
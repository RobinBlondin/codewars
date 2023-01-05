let text = "This is a test!";
let n = 2;

function encrypt(text, n) 
{
  if (text == '' || text == null)
    return text;

  let temp = text;
  let odd = '';
  let even = '';
  let result = '';
  
  for (let i = 0; i < n; i++)
  {
    for (let j = 0; j < temp.length; j++)
    {
      if (j % 2 == 0)
        odd += temp[j];
      else
        even += temp[j];
    }
   
    result += even;
    result += odd;
    odd = '';
    even = '';
    temp = result;
    result = '';
   }
    return temp;

}

console.log(encrypt(text, n))
  
function decrypt(encryptedText, n) 
{
  if (n == 0)
    return encryptedText;
  
  let floor = Math.floor(encryptedText.length / 2);
  let ceil =  Math.ceil(encryptedText.length / 2);
  let temp = encryptedText;
  let result = '';
  let even = '';
  let odd = '';

  for (let i = 0; i < n; i++)
  {
    even = temp.substr(encryptedText.length % 2 == 0 ? ceil: ceil - 1);
    odd = temp.substr(0, floor);

    for (let j = 0; j < even.length; j++)
    {
      if (j == odd.length)
        break;
      else
      {
        result += even[j];
        result += odd[j];
      }
    }
    if (encryptedText.length % 2 === 1)
      result += even[even.length - 1]

      temp = result;
      result = '';
  }
  return temp;
}

module.exports = {
    encrypt : encrypt,
    decrypt : decrypt
};
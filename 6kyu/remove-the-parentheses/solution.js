function removeParentheses(str){
  
    let regex = new RegExp(/\([a-zA-Z ]+\)/g);
    let newStr = str;
  
    while (regex.test(newStr))
    {
      newStr = newStr.replaceAll(regex, '');
    }
    
    return newStr;
    
  }

module.exports = removeParentheses;
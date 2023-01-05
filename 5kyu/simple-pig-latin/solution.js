function pigIt(str){
    let regex = new RegExp(/^\w/g);
    let strArr = str.split(' ');
    let match = '';
    
    for (let i = 0; i < strArr.length; i++)
    {
      if (regex.test(strArr[i]))
      {
        match = strArr[i].match(regex);
        strArr[i] = strArr[i].replaceAll(regex, '');
        strArr[i] += match + 'ay';
      }
    }
    return strArr.join(' ');
  }

module.exports = pigIt;
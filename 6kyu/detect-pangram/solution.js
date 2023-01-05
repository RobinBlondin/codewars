function isPangram(string){
    let lowerString = string.toLowerCase();
    for (let i = 97; i < 123; i++)
    {
      if (!lowerString.includes(String.fromCharCode(i)))
        return false
    }
  return true;
}

module.exports = isPangram;
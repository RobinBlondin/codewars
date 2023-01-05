function arrayDiff(a, b)
{
 
  /* Result calls the filter function on the first paramenter and
  and returns every value that the second parameter doesn't contain 
  */
  const temp = new Set(b);
  const result = a.filter(
    (name) => 
      {
        return !temp.has(name);
      }
    );
  
  return result;
  
}

module.exports = arrayDiff;
const oneIsNegative = (num1, num2) => {
    if (num1 < 0 && num2 >= 0 || num1 >= 0 && num2 < 0)
      return true;
    else
      return false;
  }
  
  const findDiff = (num1, num2) => {
    let result = 0;
    if (oneIsNegative(num1, num2)){
      if (num2 < num1)
        result = num2 - num1
      else
        result = num1 - num2;
    }
    else
      result = num1 - num2;
    
      if(result < 0)
      result = (result) - (result) - (result);
  
    return result;
  }
  
  var solution = function(firstArray, secondArray) {
    let result = 0;
  
    for (let i = 0; i < firstArray.length; i++) {
      result += findDiff(firstArray[i], secondArray[i]) * findDiff(firstArray[i], secondArray[i]);
    }
    return result / firstArray.length
  }

module.exports = solution;
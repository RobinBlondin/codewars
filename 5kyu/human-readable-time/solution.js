function humanReadable (seconds) {
    let input = seconds;
    let secToDivide = 3600;
    let result = ['00', '00', '00'];
  
    for (let i = 0; i < result.length; i++) {
        
  
        if (input % secToDivide == input && i != result.length - 1){
          secToDivide = secToDivide / 60;
          continue;
          }
          else if (i == result.length - 1){
            if (input == 0)
              continue;
            else {
              result[i] = result[i].substr((input).toString().length)
              result[i] = result[i].concat(input.toString());
              continue;
            }
            }
            else if (input % secToDivide == 0){
              result[i] = result[i].substr((input / secToDivide).toString().length);
              result[i] = result[i].concat(input / secToDivide.toString());
              input = 0;
            }
            else if (input % secToDivide > 0){
              result[i] = result[i].substr((Math.floor(input / secToDivide)).toString().length);
              result[i] = result[i].concat(Math.floor(input / secToDivide).toString());
              input = input % secToDivide;
        
              if (i == 0)
                secToDivide = secToDivide / 60;
              }
      
      }
    return result.join(':');
  }

module.exports = humanReadable;
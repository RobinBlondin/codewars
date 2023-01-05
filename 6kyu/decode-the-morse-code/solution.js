decodeMorse = function(morseCode){
    
    var MORSE_CODE = { 
        '.-':     'A',
        '-...':   'B',
        '-.-.':   'C',
        '-..':    'D',
        '.':      'E',
        '..-.':   'F',
        '--.':    'G',
        '....':   'H',
        '..':     'I',
        '.---':   'J',
        '-.-':    'K',
        '.-..':   'L',
        '--':     'M',
        '-.':     'N',
        '---':    'O',
        '.--.':   'P',
        '--.-':   'Q',
        '.-.':    'R',
        '...':    'S',
        '-':      'T',
        '..-':    'U',
        '...-':   'V',
        '.--':    'W',
        '-..-':   'X',
        '-.--':   'Y',
        '--..':   'Z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
      };
    
    const input = morseCode.trim().split('   ').join('  ').split(' '); //trim whitespaces and removing those extra spaces.
    let result = '';
    for(let i = 0; i < input.length; i++)
    {
       if (input[i] == '')
       {
         result += ' ';
         continue;
       }
       else
        result += MORSE_CODE[input[i]];
    }
    return result;
  }

module.exports = decodeMorse;
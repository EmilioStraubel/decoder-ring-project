// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    
    const cipher = {                                                                      //key-value pairs for alphabet value in cipher
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
      l: "13", m: "23", n: "33", o: "43", p: "53",
      q: "14", r: "24", s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " "                             //saying that an empty space should be assigned an empty space
    };
    
    const decoded = {                                                                     //key-value pairs for what each cipher number represents in alphabet
     11: "a", 12: "f", 13: "l", 14: "q", 15: "v", 21: "b", 22: "g", 23: "m", 
     24: "r", 25: "w", 31: "c", 32: "h", 33: "n", 34: "s", 35: "x", 41: "d", 
     42: "(i/j)", 43: "o", 44: "t", 45: "y", 51: "e", 52: "k", 53: "p",
     54: "u", 55: "z", [' ']: " "
    };
    
    
    if(typeof input !== 'string') return false;                                            // if input is not a string, return false
    let lowerCaseInput = input.toLowerCase()                                               //making entire input to lowercase so that we can ignore capital letters

    
    if(encode) {                                                                           //if encoding, use cipher
      return lowerCaseInput.split('').map((letter) => {                                    //splitting our lowerCaseInput to loop over it. Creates an array of individual characters. We map over array of letters to create new array with results of the callback fn 
        return cipher[letter]                                                              //Accessing cipher object by its key value(ie: cipher[a] is "11". Returning the value (#) of that letter in our cipher object. 
      }).join('')                                                                          //bringing individual characters back together
    }
    else {                                                                                  //if decoding, use decoded
      if(input.replace(/\s/g,'').length % 2 !== 0) return false                             //When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false. //using .replace to return new string without any spaces. \s meta character matches any whitespace(spaces). g flag tells JS to replace it multiple times.
      return input.match(/[0-9]{2}|\s/g).map((number) => {                                  //using .match to retrieve resulting array of matching string against regex. It can be a space or a 2 digit # from 0-9. Then mapping over array of #'s to create new array with result of the callback fn
        return decoded[number]                                                              //Accessing decoded object by its key value(ie: decoded[11] is "a". Returning the value (letter) of that # in our decoded object. 
      }).join('')                                                                           //bringing individual characters back together
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    
    if(!shift || shift === 0 || shift < -25 || shift > 25 ) return false;//deals with errors, exiting early if these conditions are true
    if(!encode) shift *= -1;                    //if decoding, multiplying shift value to make it negative num, which is how we get our shift when we need to decode.
   
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //capturing alphabet as a string, and using .split to split string into array of substrings (individual letters, since string is being split between each character)
    const lowerCaseInput = input.toLowerCase();             //make all characters in input lowercase so we don't have to worry about capital letters

    
      return lowerCaseInput.split('').map((letter) => {                                   //splitting lowerCaseInput string into array of substrings(individual letters) and looking at each letter in the array
        if(alphabet.includes(letter)){                                                    //if the letter is in the alphabet  
              if(alphabet.indexOf(letter) + shift < 0){                                   //looking at the index where the letter is present in the alphabet character array: if,when we add the shift # to that index #, it is < 0, then return the letter that is present at that position +26
                  return alphabet[alphabet.indexOf(letter) + shift + 26];
              };
              if(alphabet.indexOf(letter) + shift > 25){                                  //looking at the index where the letter is present in the alphabet character array: if,when we add the shift # to that index #, it is > 25, then return the letter that is present at that position -26
                  return alphabet[alphabet.indexOf(letter) + shift - 26];
              };
              return alphabet[alphabet.indexOf(letter) + shift];                          //If the num is not outside of the alphabet, then just return the letter that is at that index + shift #
          } else{                                                                         //for special characters/spaces that are not in the alphabet array
              return letter;
          };
      }).join('');                                                                         //brings that array back together to a string
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    if (!alphabet) return false;                                         //if there is no alphabet passed in, return false
    if(alphabet.length !== 26) return false;                             //if the length of the alphabet passed in is greater than or less than 26, return false


    const duplicate = []                                               //create empty array to hold letters in alphabet
    for(let character in alphabet) {                                   //using for in to loop through each character in the alphabet string
      if(duplicate.indexOf(alphabet[character]) < 0) {                 //looking at duplicate array. If the character is not present in the array, this will return an index of -1. If so, then push this letter into array.
        duplicate.push(alphabet[character])
      }
      else {                                                            //if the indexOf returns a value that is > -1 (meaning that the letter is already present and thus a duplicate), return false.
        return false
      }
    }


    let abc = "abcdefghijklmnopqrstuvwxyz ".split('')                  //capturing abc's in a variable as an array of individual characters using the split method. Includes intentional space.//Splitting our abc to loop over it. Creates an array of individual characters. 
    let altAbc = [...alphabet, " "];                                   //includes space to alternative abc.
    let lowerCaseInput = input.toLowerCase().split('')                 //taking input passed into function and making it all lowercase so that we don't have to worry about capital letters.//Splitting our lowerCaseInput to loop over it. Creates an array of individual characters. 
    
    
    //OLD CODE
    // const results = []                                                    //create empty array for results
    // if (encode === true){                                                //if we are encoding.
    //   for (let i = 0; i < lowerCaseInput.length; i++){                   //loop through each character in the string
    //     results.push(altAbc[abc.indexOf(lowerCaseInput[i])]);            //push the character in altAbc into our empty results array. Looks at each character in lowerCaseInput string. Then, finds the index of each character in the abc string. Then, takes that index #, and finds the matching character in altAbc at that index number. 
    //   }
    // } 
    //else {                                                                //if we are decoding.         
    //   for (let i = 0; i < lowerCaseInput.length; i++){                   //loop through each character in the string
    //     results.push(abc[altAbc.indexOf(lowerCaseInput[i])]);            //push the character in abc into our empty results array. Looks at each character in lowerCaseInput string. Then, finds the index of each character in the altAbc string. Then, takes that index #, and finds the matching character in abc at that index number. 
    //   }
    // }
    // return results.join("");                                             //using .join on results array to concatenate all elements in array.
    

    //NEW VERSION
    if (encode === true) {                                //if we are encoding
     return lowerCaseInput.map((letter) => {             //We map over array of letters to create new array with results of the callback fn
        return altAbc[abc.indexOf(letter)]               //Accessing altAbc array(ie: if altAbc = xoyqmcgrukswaflnthdjpzibev, then altAbc[0] is "x". Returning the element in altAbc array at the position of the index of the letter in the abc array.
      }).join('')                                       //bringing individual characters back together
    }
    else {                                             //If we are decoding
      return lowerCaseInput.map((letter) => {         //We map over array of letters to create new array with results of the callback fn
        return abc[altAbc.indexOf(letter)]           //Accessing altAbc array(ie: if abc = "abcdefghijklmnopqrstuvwxyz ", then abc[0] is "a". Returning the element in abc array at the position of the index of the letter in the altAbc array.
      }).join('')                                    //bringing individual characters back together
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
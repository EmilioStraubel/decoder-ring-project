// Write your tests here!
const {caesar} = require('../src/caesar');
const expect = require('chai').expect;

describe('Caesar', () => {
    it("`(thinkful, 3) should be: wklqnixo`", () => {                             //sweet test
        let actual = caesar("thinkful", 3)
        let expected = 'wklqnixo'
        expect(actual).to.equal(expected)
    });

    it("should return false if the shift amount is not present", () => {        //error handling, shift must be present
        let actual = caesar("thinkful")
        expect(actual).to.be.false
    });

    it("should return false if the shift amount is 0", () => {                  //error handling, shift cannot be 0
        let actual = caesar("thinkful", 0)
        expect(actual).to.be.false
    });

    it("should return false if the shift amount is above 25", () => {           //error handling, shift cannot be more than 25
        let actual = caesar("thinkful", 99)
        expect(actual).to.be.false
    });

    it("should return false if the shift amount is less than -25", () => {      //error handling, shift cannot be less than -25
        let actual = caesar("thinkful", -26)
        expect(actual).to.be.false
    });
    
    it("Encodes by shifting letters. Ignores capitals, maintains spaces, and non alphabetic symbols.", () => {               //while encoding, maintains spaces and other nonalphabetic symbols. Ignores capital letters
        let actual = caesar("This is a secret message!", 8)
        let expected = 'bpqa qa i amkzmb umaaiom!'
        expect(actual).to.eql(expected)
    });
    
    it("Decodes by shifting letters. Ignores capitals, maintains spaces, and non alphabetic symbols.", () => {               //while decoding, maintains spaces and other nonalphabetic symbols. Ignores capital letters.
        let actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        let expected = 'this is a secret message!'
        expect(actual).to.eql(expected)
    });


    it("should appropriately handle letters at the end of the alphabet", () => {    //When encoding, it handles shifts that go past the end of the alphabet.
        let actual = caesar("z", 4)
        let expected = 'd'
        expect(actual).to.eql(expected)
    });

    it("should allow for a negative shift that will shift to the left", () => {        //shifts to the left
        let actual = caesar("thinkful", -3)
        let expected = 'qefkhcri'
        expect(actual).to.eql(expected)
    });


});
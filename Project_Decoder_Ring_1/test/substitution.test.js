// Write your tests here!
const {substitution} = require('../src/substitution');
const expect = require('chai').expect;

describe('Substitution', () => {
    it('("thinkful", "xoyqmcgrukswaflnthdjpzibev") should be: "jrufscpw"', () => {              //sweet test. When encoding, output should still be a string
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        let expected = "jrufscpw"
        expect(actual).to.equal(expected)
    });

    it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {          //error handling, alphabet parameter must be a string of 26 characters long
        let actual = substitution("thinkful", "short");
        expect(actual).to.be.false
    });

    it("It returns false if there are any duplicate characters in the given alphabet.", () => {         //all the characters in alphabet parameter must be unique
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false
    });
    
    
    it("While decoding, handles special characters such as #, $, *, etc.", () => {           //decoding with special characters
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        let expected = "message"
        expect(actual).to.eql(expected)
    });

    it("While encoding, handles special characters such as #, $, *, etc.", () => {        //encoding with special characters
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl") 
        let expected = "y&ii$r&"
        expect(actual).to.eql(expected)
    });

    it("should ignore capital letters and leaves spaces as is", () => {                 //maintains spaces and ignores capital letters
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        let expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.eql(expected)
    });


});

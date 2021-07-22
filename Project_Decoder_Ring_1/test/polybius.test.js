// Write your tests here!
// Write your tests here!
const {polybius} = require('../src/polybius');
const expect = require('chai').expect;

describe('Polybius', () => {
    it('("thinkful") should be: "4432423352125413"', () => {                //sweet test. When encoding, output should still be a string
        let actual = polybius("thinkful")
        let expected = '4432423352125413'
        expect(actual).to.equal(expected)
    });

    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise return false", () => {             //error handling, must be an even number of characters in the string
        let actual = polybius("44324233521254134", false);
        expect(actual).to.be.false
    });
    
    it("When encoding, it translates the letters i and j to 42", () => {       //encoding with i and j
        let actual = polybius("thinkful");
        let expected = '4432423352125413'
        expect(actual).to.eql(expected)
    });
    
    it("When decoding, it translates 42 to (i/j).", () => {                 //decoding with i and j
        let actual = polybius("4432423352125413", false)
        let expected = "th(i/j)nkful"
        expect(actual).to.eql(expected)
    });

    it("While encoding, should ignore capital letters and leaves spaces as is", () => {         //encoding: ignores capital letters and maintains spaces
        let actual = polybius("Hello world")
        let expected = '3251131343 2543241341'
        expect(actual).to.eql(expected)
    });

    it("While decoding, should ignore capital letters and leaves spaces as is", () => {                //decoding: ignores capital letters and maintains spaces
        let actual = polybius("3251131343 2543241341", false)
        let expected = "hello world"
        expect(actual).to.eql(expected)
    });
});
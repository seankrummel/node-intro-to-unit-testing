'use strict';

const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', () => {
  it('should return fizz, buzz, or fizz-buzz if input number is divisible by 3, 5, or 15 respectively', () => {
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 1, expected: 1}
    ];
    normalCases.forEach(input => {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should raise an error if the argument is not a number', () => {
    const badInputs = ['a', '1', false];
    badInputs.forEach(input => {
      expect(() => {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
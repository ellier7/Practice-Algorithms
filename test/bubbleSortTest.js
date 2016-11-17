'use strict';

const solution = require('../algorithms/bubbleSort.js');
const expect = require ('chai').expect;

describe('Arrays', () => {
  describe('bubbleSort', () => {

    it('sorts the array using bubble sort method', () => {
      expect(solution.bubbleSort([4,5,1,2,3])).to.eql([1,2,3,4,5]);
    });
  });
});

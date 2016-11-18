'use strict';

const solution = require('../algorithms/insertionSort.js');
const expect = require ('chai').expect;

describe('insertionSort', () => {
	it('sorts the array using insertion sort method', () => {
		expect(solution.insertionSort([10,1,8,7,9,2])).to.eql([1,2,7,8,9,10]);
	});
});


'use strict';

const solution = require('../algorithms/quickSort.js');
const expect = require ('chai').expect;

describe('quickSort', () => {
	it('sorts the array using quick sort method', () => {
		expect(solution.quickSort([10,8,2,1,6,3,9,4,7,5])).to.eql([1,2,3,4,5,6,7,8,9,10]);
	});
});


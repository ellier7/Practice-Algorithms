'use strict';

const solution = require('../algorithms/mergeSort.js');
const expect = require ('chai').expect;

describe('mergeSort', () => {
	it('sorts the array using merge sort method', () => {
		expect(solution.mergeSort([15,18,9,3,4,1,11])).to.eql([1,3,4,9,11,15,18]);
	});
});


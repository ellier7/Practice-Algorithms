'use strict';

const solution = require('../algorithms/median.js');
const expect = require ('chai').expect;

describe('median', () => {
	it('finds the median of two sorted arrays', () => {
		expect(solution.median([3,5,6],[1,2,10])).to.eql(5);
	});
});

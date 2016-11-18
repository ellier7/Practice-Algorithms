// used for arrays that are almost sorted
// more favorable than bubblesort
'use strict';

const insertionSort = array => {
	for(let i = 1; i < array.length; i++){ // assume first ele is sorted
		for(let j = 0; j < i; j++){ // just worry about first part of array
			if(array[i] < array[j]){
				const spliced = array.splice(i,1) // splice takes it out of array; modifies array
				array.splice(j,0,spliced[0]) // inserts at spot j
			}
		}
	}
	return array;
}

module.exports = { insertionSort }

// On^2 time complexity
// constant space complexity - no new array created 
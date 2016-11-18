// given two sorted arrays, find the median element of the two arrays
const merge = require('./mergeSort')

const median = (arr1, arr2) => {
	var sorted = merge.merge(arr1, arr2)
	var middle = Math.floor(sorted.length/2)
	return sorted[middle]
}

module.exports = { median }
// breaks into smaller parts 
// "best" sorting algorithm
// stable

const mergeSort = array => {
	if(array.length < 2) {
		return array;
	}
	const middle = Math.floor(array.length/2)
	const left = array.slice(0,middle)
	const right = array.slice(middle)
	const sortedLeft = mergeSort(left)
	const sortedRight = mergeSort(right)
	return merge(sortedLeft, sortedRight)
}

const merge = (left, right) => {
	const result = []
	while(left.length && right.length){ // length !<= 0
		if(left[0] <= right[0]){	
		  //console.log("LEFT", left)
			result.push(left.shift()) // pop off front of left and push into result
			//console.log("RESULTLEFT", result)
		}else{
		  		//console.log("RIGHT", right)
			result.push(right.shift())
			//console.log("RESULTRIGHT", result)
		}
	} 
	while(left.length){
		result.push(left.shift())
	}
	while(right.length){
		result.push(right.shift())
	}

	// can use return [...result, ...left, ...right] instead of checking for lengths
	return result;
}

module.exports = { mergeSort, merge }

// complexity: O(nlogn)
// space: 0n
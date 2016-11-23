const myReduce = (list, fn, acc) => {
	let answer = acc;
	for(let i = 0; i < list.length; i++){
		answer = fn(answer, list[i])
	}
	return answer;
}
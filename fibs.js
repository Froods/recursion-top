function fibs(n, arr = []) {
	for (let i = 0; i < n; i++) {
		let curN = i;

		if (arr.length < 2) {
			arr.push(curN);
			continue;
		}

		curN = arr[i - 1] + arr[i - 2];
		arr.push(curN);
	}
	return arr;
}

let fibo = fibs(8);

console.log(fibo);

function fibsRec(n) {
	if (n > 2) {
		let curArr = fibsRec(n - 1);
		let curN = curArr[n - 2] + curArr[n - 3];
		curArr.push(curN);
		return curArr;
	}

	return [0, 1];
}

fibo = fibsRec(8);

console.log(fibo);

function mergeSort(arr) {
	if (arr.length > 1) {
		const len = arr.length;
		const mid = Math.floor(len / 2);

		let arr1 = arr.slice(0, mid);
		let arr2 = arr.slice(mid, len);

		if (arr1.length > 1) {
			arr1 = mergeSort(arr1);
		}
		if (arr2.length > 1) {
			arr2 = mergeSort(arr2);
		}

		const merged = merge(arr1, arr2);
		return merged;
	} else {
		return arr;
	}
}

function merge(arr1, arr2) {
	let returnedArr = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			returnedArr.push(arr1[i]);
			i++;
		} else {
			returnedArr.push(arr2[j]);
			j++;
		}
	}
	if (i < arr1.length) {
		while (i < arr1.length) {
			returnedArr.push(arr1[i]);
			i++;
		}
	}
	if (j < arr2.length) {
		while (j < arr2.length) {
			returnedArr.push(arr2[j]);
			j++;
		}
	}
	return returnedArr;
}

const mergedArray = mergeSort([105, 79, 100, 110, 106]);
console.log(mergedArray);

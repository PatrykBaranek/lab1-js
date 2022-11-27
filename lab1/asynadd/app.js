const asyncAdd = async (a, b) => {
	console.log('async Add function');

	if (typeof a !== 'number' || typeof b !== 'number') {
		return Promise.reject('Arguments must be type of number');
	}

	return new Promise((resolve, reject) => {
		setTimeout(resolve(a + b), 100);
	});
};

const randomNumbers = (arrNumberLength) => {
	const randomNumbers = [];
	for (let i = 0; i < arrNumberLength; i++) {
		randomNumbers[i] = Math.floor(Math.random() * 100);
	}
	return randomNumbers;
};

const addAllNumbers = (arr) => {
	return new Promise((resolve, reject) => {
		resolve(
			arr.reduce(async (prev, curr) => {
				await asyncAdd(prev, curr);
			})
		);
	});
};

const timeMesures = (arr) => {
	let onPromiseDone = () => performance.now() - start;

	let start = performance.now();

	return addAllNumbers(arr).then(onPromiseDone, onPromiseDone);

	// console.log('time mesures func');
	// const t0 = performance.now();

	// arr.reduce(async (prev, curr) => {
	// 	await asyncAdd(prev, curr).then((value) => value);
	// });

	// const t1 = performance.now();

	// console.info(`${t1 - t0} miliseconds`);
};

const numbers = randomNumbers(5);

timeMesures(numbers);

const inputs = document.querySelectorAll('input');
const resultElement = document.getElementById('result');
const btn = document.getElementById('btn');

const result = () => {
	let numbers = Array.from(inputs);
	numbers = numbers.map((x) => Number.parseInt(x.value));

	let sum = 0;
	let avg = 0;
	let min = 0;
	let max = 0;

	numbers.forEach((number) => {
		sum += number;
	});

	avg = sum / numbers.length;
	min = Math.min(...numbers);
	max = Math.max(...numbers);

	console.log(sum, avg, min, max);

	createResultOnPage([
		{ name: 'sum', value: sum },
		{ name: 'avg', value: avg },
		{ name: 'min', value: min },
		{ name: 'max', value: max },
	]);
};

const createResultOnPage = (args) => {
	if (!resultElement.hasChildNodes()) {
		for (let i = 0; i < args.length; i++) {
			let span = document.createElement('span');
			span.textContent = ` ${args[i].name}=${args[i].value} `;
			span.style.display = 'block';
			resultElement.appendChild(span);
		}
		return;
	} else {
		let spans = document.querySelectorAll('span');
		spans.forEach((span) => {
			span.remove();
		});

		return createResultOnPage(args);
	}
};

btn.addEventListener('click', result);

inputs.forEach((input) => {
	input.addEventListener('keydown', result);
});

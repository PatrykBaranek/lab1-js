let inputs = document.querySelectorAll('.value-input');
const resultElement = document.getElementById('result');

const valueInputContainer = document.querySelector('.value-input-container');
const addInputBtn = document.querySelector('.add-input-btn');
const btn = document.getElementById('calculate-btn');

const result = () => {
	let sum = 0;
	let avg = 0;
	let min = 0;
	let max = 0;

	let numbers = Array.from(inputs);
	numbers = numbers.map((x) => Number.parseInt(x.value));

	numbers.forEach((number) => {
		sum += number;
	});

	avg = Math.floor(sum / numbers.length);
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
			span.classList.add('result__item');
			span.textContent = ` ${args[i].name}= ${args[i].value} `;
			span.style.display = 'block';
			resultElement.appendChild(span);
		}
	} else {
		let spans = document.querySelectorAll('.result__item');
		spans.forEach((span) => {
			span.remove();
		});

		return createResultOnPage(args);
	}
};

const addInputOnPage = () => {
	const div = document.createElement('div');
	div.classList.add('value-input-container');

	const btn = document.createElement('button');
	btn.classList.add('remove-input-btn');
	btn.textContent = 'X';

	const input = document.createElement('input');
	input.type = 'number';
	input.classList.add('value-input');
	input.placeholder = '0';
	input.value = '0';

	valueInputContainer.appendChild(div);
	div.append(btn, input);

	inputs = document.querySelectorAll('.value-input');
};

btn.addEventListener('click', result);
addInputBtn.addEventListener('click', addInputOnPage);
document.querySelectorAll('.value-input').forEach((input) => {
	input.addEventListener('keydown', result);
});

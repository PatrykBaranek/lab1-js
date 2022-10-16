const images = [
	'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg',
	'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/01/10/29/dog-1787835_960_720.jpg',
];

let sliderPosition = 0;

const generateSlider = () => {
	const slider = document.querySelector('.slider');

	images.forEach((item) => {
		const div = document.createElement('div');
		div.classList.add('slider__item');
		div.classList.add('hide');
		const img = document.createElement('img');
		img.src = item;
		img.alt = 'dog photo';

		slider.append(div);
		div.append(img);
	});

	const firstDiv = document.querySelector('.slider__item');
	firstDiv.classList.remove('hide');
};

const nextPreviousPhotoInSlider = (e) => {
	console.log(e.target.className);

	if (e.target.className === 'next') {
		sliderPosition + 1;
	}
};

document.addEventListener('DOMContentLoaded', generateSlider);

document
	.querySelector('.previous')
	.addEventListener('click', nextPreviousPhotoInSlider);
document
	.querySelector('.next')
	.addEventListener('click', nextPreviousPhotoInSlider);

document.querySelector('click', (e) => {
	console.log(e);
});

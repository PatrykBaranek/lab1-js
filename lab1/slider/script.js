const images = [
	'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg',
	'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/01/10/29/dog-1787835_960_720.jpg',
	'https://preview.redd.it/p2ucani1xid81.jpg?width=640&crop=smart&auto=webp&s=cabafc1ce571ac8788fed4744305476a072d5133',
];

let sliderPosition = 0;
let sliderItems = [];
const autoPhotoChanger = (func, time) => setInterval(func, time);

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

	document.querySelector('.slider__item').classList.remove('hide');

	sliderItems = Array.from(document.querySelectorAll('.slider__item'));
	autoPhotoChanger(nextPhotoHandler, 2000);
};

const previousPhotoHandler = () => {
	--sliderPosition;

	if (sliderPosition < 0) {
		sliderPosition = sliderItems.length - 1;
		sliderItems[0].classList.add('hide');
		sliderItems[sliderPosition].classList.toggle('hide');
		return;
	}

	sliderItems[sliderPosition + 1].classList.toggle('hide');
	sliderItems[sliderPosition].classList.toggle('hide');
};

const nextPhotoHandler = (e) => {
	console.log(e);

	if (e !== undefined) {
		console.log('clearinterval');
		clearInterval(autoPhotoChanger);
	}

	sliderItems[sliderPosition].classList.toggle('hide');

	if (sliderPosition + 1 > sliderItems.length - 1) {
		sliderPosition = 0;
		sliderItems[sliderPosition].classList.remove('hide');
		sliderItems[sliderItems.length - 1].classList.add('hide');
		return;
	}

	sliderItems[sliderPosition + 1].classList.toggle('hide');
	sliderPosition++;
};

const sliderPhotoPosition = (sliderPosition) => {
	let dotArray = Array(images.length);
	dotArray.console.log(dotArray);
};

document.addEventListener('DOMContentLoaded', generateSlider);

document
	.querySelector('.previous')
	.addEventListener('click', previousPhotoHandler);

document.querySelector('.next').addEventListener('click', nextPhotoHandler);

const images = [
	'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg',
	'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/01/10/29/dog-1787835_960_720.jpg',
];

let sliderPosition = 0;
let sliderItems = [];
let dots = [];
let autoPhotoChangerId;

// slider generator
const generateSlider = () => {
	const slider = document.querySelector('.slider');

	images.forEach((item) => {
		const div = document.createElement('div');
		div.classList.add('slider__item');
		div.classList.add('hide');

		const img = document.createElement('img');
		img.src = item;

		slider.append(div);
		div.append(img);
	});

	const sliderDotPositionContainer = sliderPhotoPositionGenerator();
	slider.append(sliderDotPositionContainer);

	document.querySelector('.slider__item').classList.remove('hide');

	sliderItems = [...document.querySelectorAll('.slider__item')];

	addAnimationDotChangerAndInterval('next');
};

const addAnimationDotChangerAndInterval = (animationDirection = '') => {
	addAnimation(animationDirection);
	activeDotChanger();
	startAutoPhotoChanger();
};

const previousPhotoHandler = () => {
	stopAutoPhotoChanger();
	--sliderPosition;

	if (sliderPosition < 0) {
		sliderPosition = sliderItems.length - 1;
		sliderItems[0].classList.add('hide');
		sliderItems[sliderPosition].classList.toggle('hide');
		addAnimationDotChangerAndInterval('previous');
		return;
	}

	sliderItems[sliderPosition + 1].classList.toggle('hide');
	sliderItems[sliderPosition].classList.toggle('hide');
	addAnimationDotChangerAndInterval('previous');
};

const nextPhotoHandler = () => {
	stopAutoPhotoChanger();
	sliderItems[sliderPosition].classList.toggle('hide');

	if (sliderPosition + 1 > sliderItems.length - 1) {
		sliderPosition = 0;
		sliderItems[sliderPosition].classList.remove('hide');
		sliderItems[sliderItems.length - 1].classList.add('hide');
		addAnimationDotChangerAndInterval('next');
		return;
	}

	sliderItems[sliderPosition + 1].classList.toggle('hide');
	sliderPosition++;
	addAnimationDotChangerAndInterval('next');
};

// clear animation
const FROM_RIGHT_TO_LEFT_ANIMATION = 'fromRightToLeft';
const FROM_LEFT_TO_RIGHT_ANIMATION = 'fromLeftToRight';

const clearAnimation = () => {
	sliderItems.forEach((item) => {
		item.classList.remove(FROM_LEFT_TO_RIGHT_ANIMATION);
		item.classList.remove(FROM_RIGHT_TO_LEFT_ANIMATION);
	});
};

// adding animation
const addAnimation = (direction) => {
	clearAnimation();

	if (direction === 'next') {
		sliderItems[sliderPosition].classList.toggle(FROM_RIGHT_TO_LEFT_ANIMATION);
		return;
	} else if (direction === 'previous') {
		sliderItems[sliderPosition].classList.toggle(FROM_LEFT_TO_RIGHT_ANIMATION);
	}
};

const startAutoPhotoChanger = () => {
	autoPhotoChangerId = setInterval(nextPhotoHandler, 2000);
};

const stopAutoPhotoChanger = () => {
	clearInterval(autoPhotoChangerId);
};

// dot container

const sliderPhotoPositionGenerator = () => {
	const sliderDotPositionContainer = document.createElement('div');
	sliderDotPositionContainer.classList.add('dot-position-container');
	for (let i = 0; i < images.length; i++) {
		const imageDot = document.createElement('div');
		imageDot.classList.add('dot-position-container__item');
		imageDot.id = i;
		sliderDotPositionContainer.append(imageDot);
	}

	return sliderDotPositionContainer;
};

const activeDotChanger = () => {
	dots = [...document.querySelectorAll('.dot-position-container__item')];

	dots.forEach((dot) => {
		dot.classList.remove('active-photo-position');
	});

	dots[sliderPosition].classList.add('active-photo-position');
};

// slider generator
document.addEventListener('DOMContentLoaded', generateSlider);

// turn on and off autoPhotoChanger
const pauseBtn = document.querySelector('.fa-pause');
const playBtn = document.querySelector('.fa-play');

pauseBtn.addEventListener('click', () => {
	stopAutoPhotoChanger();
	playBtn.classList.remove('hide');
	pauseBtn.classList.add('hide');
});

playBtn.addEventListener('click', () => {
	startAutoPhotoChanger();
	playBtn.classList.add('hide');
	pauseBtn.classList.remove('hide');
});

// change photo by click
document
	.querySelector('.previous')
	.addEventListener('click', previousPhotoHandler);

document.querySelector('.next').addEventListener('click', nextPhotoHandler);

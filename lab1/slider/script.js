const images = [
	'https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg',
	'https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg',
	'https://cdn.pixabay.com/photo/2016/11/01/10/29/dog-1787835_960_720.jpg',
	'https://cdn.benchmark.pl/uploads/backend_img/c/recenzje/2022_10/12505_God_of_War_historia_Kratosa/GoW_Fenrir.jpg',
	'https://preview.redd.it/p2ucani1xid81.jpg?width=640&crop=smart&auto=webp&s=cabafc1ce571ac8788fed4744305476a072d5133',
	'https://whatifgaming.com/wp-content/uploads/2022/09/god-of-ragnarok.jpg',
	'https://pliki.ppe.pl/storage/7a4bcdb491c8897a74b1/7a4bcdb491c8897a74b1.jpg',
	'https://assets-prd.ignimgs.com/2022/09/13/screen-shot-2022-09-13-at-5-56-21-pm-1663109928557.png',
];

let sliderPosition = 0;
let sliderItems = [];
let autoPhotoChangerId;

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

	document.querySelector('.slider__item').classList.remove('hide');

	sliderItems = Array.from(document.querySelectorAll('.slider__item'));
	startAutoPhotoChanger();
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

const startAutoPhotoChanger = () => {
	autoPhotoChangerId = setInterval(nextPhotoHandler, 2000);
};

// slider generator
document.addEventListener('DOMContentLoaded', generateSlider);

// turn on or off autoPhotoChanger
document.querySelector('.slider').addEventListener('mouseover', () => {
	clearInterval(autoPhotoChangerId);
});
document.querySelector('.slider').addEventListener('mouseleave', () => {
	startAutoPhotoChanger();
});

// change photo by click
document
	.querySelector('.previous')
	.addEventListener('click', previousPhotoHandler);

document.querySelector('.next').addEventListener('click', nextPhotoHandler);

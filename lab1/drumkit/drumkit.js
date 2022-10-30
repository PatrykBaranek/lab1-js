const KeyToSound = {
	a: 's1',
	b: 's2',
};

// navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
// 	const mediaRecorder = new MediaRecorder(stream);

// 	mediaRecorder.start();
// 	const audioChunks = [];

// 	mediaRecorder.addEventListener('dataavailable', (e) => {
// 		audioChunks.push(e.data);
// 	});

// 	mediaRecorder.addEventListener('stop', () => {
// 		const audioBlob = new Blob(audioChunks);
// 		const audiUrl = URL.createObjectURL(audioBlob);
// 		const audio = new Audio(audiUrl);
// 		audio.play();
// 	});

// 	setTimeout(() => {
// 		mediaRecorder.stop();
// 	}, 1000);
// });

const playSound = (e) => {
	const sound = getPressedKey(e);
	if (!sound) {
		return;
	}
	sound.currentTime = 0;
	sound.play();
};

const getPressedKey = (e) => {
	console.log(e);
	const soundToPlay = document.querySelector(`#${KeyToSound[e.key]}`);
	if (!soundToPlay) {
		return;
	}
	return soundToPlay;
};

console.log(URL.createObjectURL());

document.addEventListener('keypress', playSound);

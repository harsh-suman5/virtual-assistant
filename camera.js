
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-IN';

let indianEnglishVoice, hindiVoice;
let mediaStream = null;
let mediaRecorder = null;
let recordedChunks = [];

function setVoices() {
    const voices = window.speechSynthesis.getVoices();
    indianEnglishVoice = voices.find(voice =>
        voice.lang === 'en-IN' && (voice.name.includes('Female') || voice.name.includes('Google IN English Female'))
    );
}

function startListening() {
    document.getElementById('output').innerHTML = "Listening...";
    recognition.start();
}

recognition.onresult = async function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    document.getElementById('transcript').innerHTML = "You said: " + transcript;

    if (transcript.includes("take a picture")) {
        speak("Taking a picture...", false);
        await capturePicture();
    } else if (transcript.includes("start recording")) {
        speak("Starting video recording...", false);
        startRecording();
    } else if (transcript.includes("stop recording")) {
        speak("Stopping video recording...", false);
        stopRecording();
    } else {
        speak("Sorry, I didn't understand.", false);
    }
};

async function capturePicture() {
    try {
        const video = document.getElementById('videoPreview');
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageDataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imageDataUrl;
        link.download = 'captured_image.png';
        link.click();

        speak("Picture saved.", false);
    } catch (error) {
        console.error("Error capturing picture:", error);
        speak("Failed to capture picture.", false);
    }
}

function startRecording() {
    if (!mediaStream) {
        speak("Camera is not initialized. Please enable the camera first.", false);
        return;
    }

    mediaRecorder = new MediaRecorder(mediaStream);
    mediaRecorder.ondataavailable = event => recordedChunks.push(event.data);
    mediaRecorder.onstop = saveRecording;

    recordedChunks = [];
    mediaRecorder.start();
}

function stopRecording() {
    if (mediaRecorder) {
        mediaRecorder.stop();
    } else {
        speak("No recording in progress.", false);
    }
}

function saveRecording() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'recorded_video.webm';
    link.click();

    speak("Video saved.", false);
}

async function enableCamera() {
    try {
        mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('videoPreview');
        video.srcObject = mediaStream;
        video.play();
        speak("Camera is enabled.", false);
    } catch (error) {
        console.error("Error enabling camera:", error);
        speak("Failed to enable the camera.", false);
    }
}

function speak(text, isHindi) {
    const utterance = new SpeechSynthesisUtterance(text);

    if (isHindi && hindiVoice) {
        utterance.voice = hindiVoice;
        utterance.lang = 'hi-IN';
    } else if (!isHindi && indianEnglishVoice) {
        utterance.voice = indianEnglishVoice;
        utterance.lang = 'en-IN';
    } else {
        utterance.lang = isHindi ? 'hi-IN' : 'en-IN';
    }

    speechSynthesis.speak(utterance);
}

window.addEventListener('load', () => {
    setVoices();
    enableCamera();
});

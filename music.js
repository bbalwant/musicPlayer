console.log("welcome to my music player");
let songIndex = 0;
let audioElement = new Audio('Audio/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "let me love you", filepath: "Audio/1.mp3", coverpath: "cover/1.jpg" },
    { songName: "Save your tears", filepath: "Audio/2.mp3", coverpath: "cover/2.jpg" },
    { songName: "Life is not a fair", filepath: "Audio/3.mp3", coverpath: "cover/3.jpg" },
    { songName: "Levitaing", filepath: "Audio/4.mp3", coverpath: "cover/4.jpg" },
    { songName: "Rocakstar", filepath: "Audio/1.mp3", coverpath: "cover/5.jpg" },
    { songName: "Sunflower", filepath: "Audio/1.mp3", coverpath: "cover/6.jpg" },
    { songName: "Perfect", filepath: "Audio/1.mp3", coverpath: "cover/7.jpg" },
    { songName: "Bad night", filepath: "Audio/1.mp3", coverpath: "cover/8.jpg" },
    { songName: "Talk to moon", filepath: "Audio/1.mp3", coverpath: "cover/9.jpg" }
]
songItems.forEach((element , i) =>{
    // console.log(element , i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressBar.value = progress
})
myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = myprogressBar.value * audioElement.duration / 100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        // console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Audio/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

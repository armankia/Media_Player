const songs = [
    "acousticbreeze.mp3",
    "hey.mp3",
    "inspire.mp3",
    "pianomoment.mp3",
    "relaxing.mp3",
    "thelounge.mp3"
];

const player = document.getElementById('player');

function createSongList() {
    const list = document.createElement("ol")
    for (let i=0; i<songs.length; i++) {
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list
}

const songList = document.getElementById('songList');
songList.appendChild(createSongList());

songList.onclick = function(e) {
    const source = document.getElementById('source');
    source.src = 'music/'+ e.target.innerText;
    
    document.getElementById('currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();
}

function playAudio(){
    if (player.readyState) {
        player.play();
    }
}

function pauseAudio(){
    player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function(e) {
    const volume = e.target.value;
    player.volume = volume;
}

function updateProgress(){
    if (player.currentTime > 0) {
        const progressBar = document.getElementById("progressBar");
        progressBar.value = (player.currentTime / player.duration) * 100
    }
}

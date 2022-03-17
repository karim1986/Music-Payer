const songs = [
  "bensound-hey.mp3",
  "bensound-creativeminds.mp3",
  "bensound-jazzyfrenchy.mp3",
  "bensound-littleidea.mp3",
  "bensound-ukulele (1).mp3",
  "bensound-ukulele.mp3",
];

const player = document.querySelector("#player");
const slider = document.querySelector("#volumeSlider");
const links = document.querySelectorAll("li");

function creatSongList() {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
}

const songList = document
  .querySelector("#songList")
  .appendChild(creatSongList());

for (const link of links) {
  link.addEventListener("click", songList);
}

songList.addEventListener("click", (evt) => {
  document.querySelector("#headphones").classList.remove("pulse");
  const source = document.querySelector("#source");
  source.src = "sounds/" + evt.target.innerText;
  document.querySelector(
    "#currentSong"
  ).innerHTML = `Now Playing: ${evt.target.innerText}`;
  player.load();
  player.play();
  document.querySelector("#headphones").classList.add("pulse");
});

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

slider.oninput = function (evt) {
  const volume = evt.target.value;
  player.volume = volume;
};

function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.querySelector("#progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}

creatSongList();

// CSS Inputs

var bg = document.getElementById('background-audio1');
var bgVol = 0.5;
document.getElementById('songVolume').addEventListener('input', function() {
  bgVol = this.value / 100; // Convert to range 0-1
  adjustSongVolume(bgVol);
});

// Function to adjust song volume
function adjustSongVolume(volume) {
  if (bg) {
    bg.volume = volume;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const songVolumeSlider = document.getElementById('songVolume');
  songVolumeSlider.value = bgVol * 100;
  console.log("Loaded saved song volume")
  bg.volume = bgVol;
});

let boxes = document.getElementsByClassName("box"); // Note the plural 'boxes' to indicate multiple elements
let input = document.querySelector("input");

input.addEventListener("input", () => {
    // Loop through each .box element because getElementsByClassName returns a collection
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.borderRadius = input.value;
        boxes[i].style.backgroundColor = input.value;
    }
});

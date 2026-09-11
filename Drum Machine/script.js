const drumPad = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function play(pad) {
  const audio = pad.querySelector(".clip");

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.id;
  pad.classList.add("active");

  setTimeout(() => pad.classList.remove("active"), 150);
}

drumPad.forEach(pad => {
  pad.addEventListener("click", () => {
    play(pad);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const pad = document.querySelector(`#${key}`).parentElement;

  play(pad);
})
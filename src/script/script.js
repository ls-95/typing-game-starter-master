// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
  "galaxy",
  "pineapple",
  "velocity",
  "whisper",
  "crimson",
  "lantern",
  "ocean",
  "nebula",
  "forest",
  "quartz",
  "shadow",
  "echo",
  "tornado",
  "velvet",
  "horizon",
  "spark",
  "meadow",
  "comet",
  "drizzle",
  "ember",
  "cascade",
  "orbit",
  "glimmer",
  "thunder",
  "breeze",
  "canyon",
  "frost",
  "mirage",
  "pulse",
  "harbor",
  "anchor",
  "blossom",
  "circuit",
  "dawn",
  "emberlight",
  "feather",
  "gravity",
  "harvest",
  "illusion",
  "journey",
  "kingdom",
  "luminous",
  "motion",
  "nectar",
  "opal",
  "paradox",
  "quest",
  "ripple",
  "spectrum",
  "twilight",
];

//Initializing word
let randomWord;
function addWordToDOM() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  word.textContent = randomWord;
}
addWordToDOM();

//Initializing score
let score = 0;
function updateScore() {
  score++;
  scoreEl.textContent = score;
}

//Initializing time
let time = 10;

text.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (this.value === randomWord) {
      updateScore();
      addWordToDOM();
      this.value = "";
    } else {
      addWordToDOM();
      this.value = "";
    }
  }
});

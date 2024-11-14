const emojis = [
    "🦊",
    "🦊",
    "🐮",
    "🐮",
    "🐧",
    "🐧",
    "🐥",
    "🐥",
    "🐭",
    "🐭",
    "🐼",
    "🐼",
    "🐷",
    "🐷",
    "🐶",
    "🐶",
];
let openCards = [];

/* sorteia */
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1)); 

/* for que mostra elementos na tela */
for (let i = 0; 1 < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML =shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);
}
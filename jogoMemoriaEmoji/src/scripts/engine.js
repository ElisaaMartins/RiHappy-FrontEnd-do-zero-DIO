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
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML =shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

/* função que deixa escolher apenas dois cards */
function handleClick() {
    if(openCards.length < 2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

/* função que confere se os cards são iguais 
se sim fica selecionado os cards se não vira de volta*/
function checkMatch() {

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxOpen");
        openCards[1].classList.add("boxOpen");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    /* condição de vitória -- conta através das divs */
    if (document.querySelectorAll(".boxOpen").length === emojis.length) {
        alert("VOCê VENCEU!!!")
    }
}
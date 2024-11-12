const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result:0,
        curretTime: 60,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000), //pode fazer uma função direto aqui
    }
};

/* função correr tempo */
function countDown () {
    state.values.curretTime --;
    state.view.timeLeft.textContent = state.values.curretTime;

    if (state.values.timerId < 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("GAME OVER! O seu resultado foi: " + state.values.result);
    }
}

function playSound() {
    let audio = new Audio ()
}

function randomSquare (){
    /* lipou a classe inmimigo */
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    /* sorteou um numero de 1 a 9 */
    let randomNumber = Math.floor(Math.random() * 9);

    /* quadrado do numero sorteado */
    let randomSquare = state.view.squares[randomNumber];

    /* adiciona a classe inimigo */
    randomSquare.classList.add("enemy");

    state.values.hitPosition = randomSquare.id;
}

/* função que chama o inimigo a cada X tempo */
/* function moveEnemy (){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}
 */
/* função que vai ficar ouvindo para fazer uma ação */
/* se o quadrado clicado for o quadrado que o inimigo estiver aumenta 1 no score */
function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id == state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            }
        })
    });
}

/* função inicial */
function initialize(){
//    moveEnemy();
    addListenerHitBox();
}

initialize();
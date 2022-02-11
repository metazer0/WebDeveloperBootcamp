const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Score')
}


const resetButton = document.querySelector('#reset')
const playToSelect = document.querySelector('#playTo')
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){

    if(!isGameOver){

        player.score++

        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }

        player.display.textContent = player.score
    }
}


p1.button.addEventListener('click',()=> {
    updateScores(p1,p2)
})

p2.button.addEventListener('click',()=> {
    updateScores(p2,p1)
})

playToSelect.addEventListener('change',function() {

    winningScore = parseInt(this.value)   
   
    resetGame();
})

resetButton.addEventListener('click', resetGame)

function resetGame(){

    isGameOver =  false;

    p1.score = 0;
    p2.score = 0;

    p1.display.textContent = 0
    p2.display.textContent = 0

    p1.display.classList.remove('has-text-success','has-text-danger')
    p2.display.classList.remove('has-text-success','has-text-danger')

    p1.button.disabled = false
    p2.button.disabled = false
}

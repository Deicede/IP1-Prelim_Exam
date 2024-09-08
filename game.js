let player1Score = 0;
let player2Score = 0;
const player1Score_span = document.getElementById('player1-score');
const player2Score_span = document.getElementById('player2-score');
const showResult = document.getElementById('result');




function getplayer1Choice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}


function getplayer2Choice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}


function player1win() {
    player1Score++;
    player1Score_span.innerHTML = player1Score;
    showResult.innerHTML = "Player 1 wins!";

    if (player1Score === 3) {
        player1Score = 0;
        player2Score = 0;
        player1Score_span.innerHTML = player1Score;
        player2Score_span.innerHTML = player2Score;
        showResult.innerHTML = "Player 1 wins the game!";
    }
}

function player2win() {
    player2Score++;
    player2Score_span.innerHTML = player2Score;
    showResult.innerHTML = "Player 2 wins!";

    if (player2Score === 3) {
        player1Score = 0;
        player2Score = 0;
        player1Score_span.innerHTML = player1Score;
        player2Score_span.innerHTML = player2Score;
        showResult.innerHTML = "Player 2 wins the game!";
    }
}


function tie(){
    showResult.innerHTML = "It's a tie";
}


function result(){
    const player1Choice = getplayer1Choice();
    const player2Choice = getplayer2Choice();
 
    const bothChoice = player1Choice + player2Choice;

    const player1ChoiceElement = document.getElementById('PLAYER1');
    const player2ChoiceElement = document.getElementById('PLAYER2');


    player1ChoiceElement.src = `/img/${player1Choice}_image.png`;
    player2ChoiceElement.src = `/img/${player2Choice}_image.png`; 

    console.log(bothChoice);
    if (bothChoice === "paperrock" || bothChoice === "scissorspaper" || bothChoice === "rockscissors"){
        player1win();
    }
    else if (bothChoice === "scissorsrock" || bothChoice === "rockpaper" || bothChoice === "paperscissors"){
        player2win();
    }
    else{
        tie();
    }
}



function play() {
    result();    
}





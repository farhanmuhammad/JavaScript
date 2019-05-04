var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var maxScore = document.querySelector("#maxScore");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
           if (p1score === winningScore){
               gameOver = true;
               p1Display.classList.add("winner");
           } 
        p1Display.textContent = p1score;
    }
    
    
});

p2button.addEventListener("click", function(){
    if (!gameOver){
        p2score++;
        if (p2score === winningScore){
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2score;

    }
    
});

function reset(){
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
};

resetButton.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    maxScore.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})
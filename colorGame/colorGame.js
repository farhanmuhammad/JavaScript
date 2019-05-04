var numSquares = 6;
var colors = generateRandomColor(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyButton = document.querySelector("#easyButton");
// var hardButton = document.querySelector("#hardButton");

var modeButtons = document.querySelectorAll(".mode");

reset();
for (var i = 0; i < modeButtons.length; i++)
{
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numSquares = 3;
        }
        else if(this.textContent === "Hard")
        {
            numSquares =6;
        }
        else
        {
            numSquares=9;
        }


        reset();

    });
}

function reset(){
    messageDisplay.textContent = "";
    colors = generateRandomColor(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colors";

    for (var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
            
        }
        else
        {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
}


// easyButton.addEventListener("click", function(){
//    hardButton.classList.remove("selected");
//    easyButton.classList.add("selected");
//    numSquares = 3;
//    colors = generateRandomColor(numSquares);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    h1.style.backgroundColor = "steelblue";
//    messageDisplay.textContent = "";
//    for (var i = 0; i < squares.length; i++)
//    {
//        if (colors[i])
//        {
//            squares[i].style.backgroundColor = colors[i];
//        }
//        else
//        {
//            squares[i].style.display = "none";
//        }
//    }
// })

// hardButton.addEventListener("click", function(){
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColor(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "steelblue";
//     messageDisplay.textContent = "";
//     for (var i = 0; i < squares.length; i++)
//     {
//          squares[i].style.backgroundColor = colors[i];
//          squares[i].style.display = "block";
//     }
// })

colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){

    reset();
})


for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener ("click", function(){
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "correct";
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again ?";
            changeColor(clickedColor);
        }
        else
        {
            this.style.backgroundColor = "black";
            messageDisplay.textContent = "try again";
        }

    });
}

function changeColor(color){
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];

    for (var i = 0; i < num ; i++)
    {
        arr.push(randomRGB());
    }

    return arr; 
}

function randomRGB(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
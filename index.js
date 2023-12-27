let buttonColours = ["orange", "red", "yellow", "blue"];
let gamePattern = [];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * (3 - 0 + 1 ));
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // animation to fade
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

nextSequence();
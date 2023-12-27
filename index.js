let buttonColours = ["orange", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").click(function() {
    let userChosenColour = $('this').attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * (3 - 0 + 1 ));
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass('pressed');
      }, 100);
}

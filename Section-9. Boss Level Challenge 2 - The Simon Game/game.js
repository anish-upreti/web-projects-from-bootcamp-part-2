
var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red","blue","green","yellow"];

var started = false;
var level = 0;

$(document).keydown(function(){

    if(!started){
        $("#level-title").text("level "+ level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});


function nextSequence(){

    userClickedPattern = [];

    level++;

    $("#level-title").text("level " + level);

    var randomNum = Math.floor(4*Math.random());

    var randomChosenColor = buttonColors[randomNum];
    
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var sound = new Audio("sounds/" + randomChosenColor + ".mp3");
    sound.play();

    playSound(randomChosenColor);
}

function playSound(name){

    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor){

    $("#"+ currentColor).addClass("pressed");

    setTimeout(function() {
        $("#"+ currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
      console.log("success");
  
      if (userClickedPattern.length === gamePattern.length){
  
        setTimeout(function () {
          nextSequence();
        },1000);
      }
    }
    else{
      console.log("failure");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout( function () {
        $("body").removeClass("game-over");
      },200);

      $("#level-title").text("Game Over, Press Any Key To Restart");

      startOver();
    }
  }

function startOver(){

    level = 0;
    gamePattern = [];
    started = false;
}


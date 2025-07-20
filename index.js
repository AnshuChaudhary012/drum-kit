// button is pressed here

var allButtons = document.querySelectorAll(".drum");

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHtml = this.innerHTML;  // FIXED HERE 👈
  makesound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);

  }

// keyboard key is pressed here 

document.addEventListener( "keydown" , function(event){
  makesound(event.key);
  buttonAnimation(event.key);
})

function makesound (key){

  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log(buttonInnerHtml);
  }

}


// now, time for button animation

function buttonAnimation (currentkey){
  
 var activeButton = document.querySelector("." + currentkey);

activeButton.classList.add("pressed");
setTimeout(function(){
activeButton.classList.remove("pressed")
  
},100);

}
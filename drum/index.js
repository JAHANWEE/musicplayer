

function handleClick(event) {
  
  console.log(this);
  console.log(event.target);
  makeSound(event.target.innerText);
  buttonAnimation(event.target.innerText);
}

// Added event to Each buttom using for loop
let eventArray = document.querySelectorAll("button");
for (const event of eventArray) {
  event.addEventListener("click", handleClick);
}

// Adding Event Listeners to Keyboard Pressed
document.addEventListener("keypress", handleKeyboardEvent);

function handleKeyboardEvent(event) {
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);
}

function makeSound(key) {
  switch (key) {
    case "P": {
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    }
    case "L": {
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    }
    case "A": {
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    }
    case "Y": {
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    }
    case "T": {
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    }
    case "H": {
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    }
    case "E": {
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    }
    case "R": {
      let kick = new Audio("sounds/tom-4.mp3");
      kick.play();
      break;
    }
    case "A": {
      let kick = new Audio("sounds/tom-3.mp3");
      kick.play();
      break;
    }
    case "P": {
      let kick = new Audio("sounds/tom-4.mp3");
      kick.play();
      break;
    }
    default: {
      break;
    }
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  document.body.classList.add("modify-body");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
    document.body.classList.remove("modify-body");
  }, 200);
}

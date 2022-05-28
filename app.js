let width = 28;
const grid = document.querySelector(".grid");
let scoreDisplay = document.getElementById("score");
const squares = [];
let score = 0;

// 0 - pacdots
// 1 - wall
// 2 - ghost lair
// 3 - powerpellets
// 4 - empty

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 4, 4, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 4, 4, 4,
  1, 0, 1, 4, 4, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 4, 4, 4, 4, 1, 1, 4, 4, 4,
  4, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 4, 4, 4, 4, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 4, 4, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    let square = document.createElement("div");
    grid.appendChild(square);
    squares.push(square);
    if (layout[i] === 0) {
      squares[i].classList.add("pac-dot");
    } else if (layout[i] === 1) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 2) {
      squares[i].classList.add("ghost-lair");
    } else if (layout[i] === 3) {
      squares[i].classList.add("power-pellet");
    }
  }
}

createBoard();

//place pacman in position
pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add("pacman");

function control(e) {
  squares[pacmanCurrentIndex].classList.remove("pacman");
  switch (e.key) {
    case "ArrowUp":
      if (
        !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair") &&
        //onlyif pacman above square is not wall then move
        !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
        pacmanCurrentIndex - width >= 0
      ) {
        pacmanCurrentIndex -= 28;
      }
      break;
    case "ArrowDown":
      if (
        !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair") &&
        //onlyif pacman below square is not wall then move
        !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
        pacmanCurrentIndex + width < width * width
      ) {
        pacmanCurrentIndex += 28;
      }
      break;
    case "ArrowRight":
      if (
        !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair") &&
        //onlyif pacman right square is not wall then move
        !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
        pacmanCurrentIndex % 28 < 28 - 1
      ) {
        pacmanCurrentIndex += 1;
        if (pacmanCurrentIndex === 391) {
          pacmanCurrentIndex = 364;
        }
      }
      break;
    case "ArrowLeft":
      if (
        !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair") &&
        //onlyif pacman left square is not wall then move
        !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
        pacmanCurrentIndex % width !== 0
      ) {
        pacmanCurrentIndex -= 1;
        if (pacmanCurrentIndex === 364) {
          pacmanCurrentIndex = 391;
        }
      }
  }
  squares[pacmanCurrentIndex].classList.add("pacman");
  patDotsEaten();
  powerPelletsEaten();
  checkForGameOver();
  checkForWin();
}

document.addEventListener("keyup", control);

function patDotsEaten() {
  if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
    squares[pacmanCurrentIndex].classList.remove("pac-dot");
    score++;
    scoreDisplay.innerHTML = score;
  }
}

function powerPelletsEaten() {
  //if square pacman is in contains powerpellete
  if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
    squares[pacmanCurrentIndex].classList.remove("power-pellet");
    //add score to 10
    score += 10;
    scoreDisplay.innerHTML = score;
    ghosts.forEach((ghost) => (ghost.isScared = true));
    //unscare the ghost after10 seconds
    setTimeout(unscaredGhost, 10000);
  }
}

function unscaredGhost() {
  ghosts.forEach((ghost) => (ghost.isScared = false));
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

const ghosts = [
  new Ghost("blinky", 348, 250),
  new Ghost("pinky", 376, 400),
  new Ghost("inky", 351, 300),
  new Ghost("clyde", 379, 500),
];

ghosts.forEach((ghost) => {
  squares[ghost.currentIndex].classList.add(ghost.className);
  squares[ghost.currentIndex].classList.add("ghost");
});

//move ghosts
ghosts.forEach((ghost) => moveGhost(ghost));

function moveGhost(ghost) {
  const directions = [-1, 1, -width, width];
  let direction = directions[Math.floor(Math.random() * directions.length)];

  ghost.timerId = setInterval(function () {
    if (
      !squares[ghost.currentIndex + direction].classList.contains("wall") &&
      !squares[ghost.currentIndex + direction].classList.contains("ghost")
    ) {
      //remove ghost class
      squares[ghost.currentIndex].classList.remove(ghost.className);
      squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
      //add direction to current index
      ghost.currentIndex += direction;
      //add ghost class
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    } else direction = directions[Math.floor(Math.random() * directions.length)];
    //if ghost is scared
    if (ghost.isScared) {
      squares[ghost.currentIndex].classList.add("scared-ghost");
    }

    //if ghost is scared and pac is on it
    if (
      ghost.isScared &&
      squares[ghost.currentIndex].classList.contains("pacman")
    ) {
      //remove ghost, scared ghost
      squares[ghost.currentIndex].classList.remove(
        "ghost",
        "scared-ghost",
        ghost.className
      );
      //add score to 100
      score += 100;
      scoreDisplay.innerHTML = score;
      //return ghost to its starting place
      ghost.currentIndex = ghost.startIndex;
      //add class
      squares[ghost.currentIndex].classList.add("ghost");
      squares[ghost.currentIndex].classList.add(ghost.className);
    }
    checkForGameOver();
  }, ghost.speed);
}

function checkForGameOver() {
  //if square pacman contains ghost and ghost is not scared
  if (
    squares[pacmanCurrentIndex].classList.contains("ghost") &&
    !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
  ) {
    //for each ghost we need to stop is moving
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    //remove event listener
    document.removeEventListener("keyup", control);
    //display score board
    scoreDisplay.innerHTML = "You lose";
  }
}

function checkForWin() {
  //if score is 274
  if (score === 274) {
    ghosts.forEach((ghost) => clearInterval(ghost.timerId));
    document.removeEventListener("keyup", control);
    scoreDisplay.innerHTML = "You Won";
  }
}

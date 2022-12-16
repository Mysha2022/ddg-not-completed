var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var blast, blastImg;

function preload() {
  backgroundImage = loadImage("./jungleBG.jpg"); //
  car1_img = loadImage("../dino1.png"); // 
  car2_img = loadImage("../dino2.png"); // 
  track = loadImage("../assets/track.jpg");//
  fuelImage = loadImage("./fruit.png");//
  powerCoinImage = loadImage("./assets/goldCoin.png");//
  obstacle1Image = loadImage("./stone.png"); //
  car1_img.scale=1.2;
  obstacle2Image = loadImage("./shrub.png"); // 
  obstacle2Image.scale=1.2;
  lifeImage = loadImage("./assets/life.png");//
  blastImg = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var timeCheck;
var r, g, b;

let bImg;

let myFont;

let bunny;
let uImg;
let tImg;
let lImg;
let bushes = [];

var song;
var jumpSound;
var deathSound;

function preload() {
  uImg = loadImage('bunny sprite 1.png');
  tImg = loadImage('bush.png');
  bImg = loadImage('background.png');
  lImg = loadImage('you lose.png');
  song = loadSound('background music.wav');
  jumpSound = loadSound('jump sound.wav');
  deathSound = loadSound('death sound.wav');
  myFont = loadFont('light-pixel-7.ttf');
  
}
function setup() {
  createCanvas(800, 450);
  console.log('press space to jump, avoid the obstacles!');
  bunny = new Bunny();
  song.play();
  song.loop();
  song.setVolume(0.2);
  
  timeCheck = 0;
  
  r = 220;
  g = 220; 
  b = 220;

}

function displayStartMessage() {
  textFont(myFont);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text('Bunny Jumper!', width / 2, height / 2);
  
}
  

function keyPressed() {
  if (key == ' ') {
    bunny.jump();
    jumpSound.play();
  }
}

function draw() {
  if (random(1) < 0.01) {
    bushes.push(new Bush());
    
  }
  
  background(bImg);
  for (let t of bushes) {
    t.move();
    t.show();
    if (bunny.hits(t)) {
      console.log("game over!");
      image(lImg, 100, 80, 600, 80);
      deathSound.play();
      deathSound.setVolume(0.8);
      noLoop();
    }
    
    
  }

  textFont (myFont)
  textSize(20);
  text("Time Passed", 10, 20);
  currentTime = floor(millis()/1000);
  text(currentTime, 10, 50);
  
  if ((currentTime - timeCheck) > 2){
    r = random(0, 225);
    g = random(0, 225);
    b = random(0, 225);
    timeCheck = currentTime;
  }  

  
  bunny.show();
  bunny.move();
}

var rainbowColors;
var myFont;
var fontReady = false;

function preLoad() {
  myFont = loadFont("./fonts/AgentOrange.ttf");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  noStroke();
  angleMode("degrees");
  textAlign(CENTER, CENTER);
  rainbowColors = [
    color(255, 0, 0),
    color(255, 255, 0),
    color(0, 255, 0),
    color(0, 255, 255),
    color(0, 0, 255),
    color(255, 0, 255),
  ];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  count ++;// For debugging purposes
}

function draw() {
  // Background
  var bgColor = rainbowColors[Math.floor(count/10) % rainbowColors.length];
  background(lerpColor(color(0), bgColor, 0.9));

  // Fan blades
  fill(lerpColor(color(255), bgColor, 0.9));
  for (var i = 0; i < 10; i ++) {
    var angle1 = i*36+millis()/100;
    var angle2 = i*36 + 18+millis()/100;

    triangle(width/2, height/2,
       width/2+width*cos(angle1), height/2+width*sin(angle1),
     width/2+width*cos(angle2), height/2+width*sin(angle2));
  }

  // Title
  fill(0);
  textSize(width*0.1);
  if (fontReady) {
    textFont(myFont);
  }
  text("Shake Your Phone!", width*0.5, height*0.1);

  // Count
  textSize(width*0.4);
  text(count, width*0.5, height*0.56);
}
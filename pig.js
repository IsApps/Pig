function setup() {
  createCanvas(400, 400);
  strokeWeight(4);
}

function draw() {
  background(125, 255, 125);
  fill(255, 192, 203);

  // Legs - 125 is X and 250 is Y
  rect(125, 250, 25, 150);
  rect(243, 250, 25, 150);

  // Body - X is 196 and Y is 144
  ellipse(196, 144, 280, 240);

  // Face - X is 192 and Y is 138
  ellipse(195, 138, 150, 150);

  // Ears
  ellipse(145, 75, 20, 30);
  ellipse(231, 68, 20, 30);

  // Face

  // Left Eye
  fill(255, 255, 255);
  ellipse(162, 111, 26, 26);

  fill(0, 0, 0);
  ellipse(162, 110, 13, 13);

  // Right Eye
  fill(255, 255, 255);
  ellipse(212, 111, 26, 26);

  fill(0, 0, 0);
  ellipse(212, 111, 13, 13);

  // Nose
  fill(255, 192, 203);
  ellipse(190, 157, 40, 15);

  fill(0, 0, 0);
  ellipse(181, 157, 10, 5);

  fill(0, 0, 0);
  ellipse(200, 157, 10, 5);

  // Smile
  curve(140, 180, 172, 195, 210, 195, 205, 180);

  // Feet
  rect(125, 372, 25, 25);
  rect(243, 372, 25, 25)
}

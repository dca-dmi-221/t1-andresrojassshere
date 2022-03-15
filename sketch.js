let pantalla = 0;

function setup() {
  createCanvas(2000, 1000);

  imagenFondo = loadImage ('imagenes/fondo1.jpg');
  song1 = loadSound('canciones/LustForLife.mp3');
}

function draw() {
  background(220);
  switch (pantalla) {
    case 0:
      background(220);
      image(imagenFondo,0,0,2000,1000)

      //botón de play now
      if (mouseX > 1482 && mouseX < 1882 && mouseY > 825 && mouseY < 955) {
      stroke(0);
      strokeWeight(20);
      fill(36,255,0)
      rect(1482,825,400,130,100);
      } else {  
        fill (255); 
        stroke(0);
        strokeWeight(20);
        rect(1482,825,400,130,100);
      }
      stroke(0);
      strokeWeight(20);
      rect(1482,825,400,130,100);
      textAlign(CENTER,CENTER);
      textSize(50);
      stroke(0);
      strokeWeight(5);
      fill(0);
      text('play now!',1682,890);
      break;
      
      case 1:
        background(220);
        break;
  }

}

function mousePressed() {
  if (song1.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song1.stop();
    background(255, 0, 0);
  } else {
    song1.play();
    background(0, 255, 0);
  }
}

function mouseClicked() {
  switch(pantalla){
    case 0:
  if (mouseX > 1482 && mouseX < 1882 && mouseY > 825 && mouseY < 955) 
  pantalla = 1;
  break;
  }
}
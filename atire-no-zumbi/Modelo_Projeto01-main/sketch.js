var bg;
var bgimg;
var playerimg ,playeratirando ,player;


function preload(){
  bgimg=loadImage("bg.jpeg");
  playerimg=loadImage("shooter_2.png");
  playeratirando=loadImage("shooter_3.png");
}

function setup() {
 createCanvas(1300,650);

  //adicionando a imagem de fundo
  bg=createSprite(660,450,30,30);
  bg.addImage(bgimg);
  //adicionando o jogador
  player=createSprite(180,430,50,50);
  player.addImage(playerimg);
  player.scale=0.3;




  

  

}

function draw() {
  background(0); 

  //movendo o jogador para baixo
  if(keyDown("S")){
    player.y +=10
  }
  //MOVENDO PARA CIMA
  if(keyDown("W")){
    player.y -=10
  }
  //movendo para frente
  if(keyDown("D")){
    player.x +=10
  }
  //movendo para 
  if(keyDown("A")){
    player.x -=10
  }


  drawSprites();

}

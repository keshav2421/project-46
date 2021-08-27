var database;
var boy,bimg;
var gameState = 0;
var playerCount;
var allPlayers;
var p1,p2,p3,p4,p5;
var p6,p7,p8,p9,p10;
var players;
var form, player, game;
function  preload() {

p1_img=loadAnimation("player-1/k1.png","player-1/k2.png","player-1/k3.png","player-1/k4.png","player-1/k5.png ", "player-1/k6.png" )
p2_img=loadAnimation("player-2/p1.png","player-2/p2.png","player-2/p3.png","player-2/p4.png","player-2/p5.png","player-2/p6.png")
p3_img=loadAnimation("player-3/y1.png","player-3/y2.png","player-3/y3.png","player-3/y4.png","player-3/y5.png","player-3/y6.png","player-3/y7.png","player-3/y8.png","player-3/y9.png",)  
p4_img=loadAnimation("player-4/b1.png","player-4/b2.png","player-4/b3.png","player-4/b4.png","player-4/b5.png","player-4/b6.png","player-4/b7.png")
p5_img=loadAnimation("player-5/r1.png","player-5/r2.png","player-5/r3.png","player-5/r4.png","player-5/r5.png","player-5/r6.png")

//////////////////////////////////////////////////////////////////////////////////// opponent team [-_-]

p6_img=loadAnimation("player-6/y1.png","player-6/y2.png","player-6/y3.png","player-6/y4.png","player-6/y5.png","player-6/y6.png","player-6/y7.png","player-6/y8.png","player-6/y9.png","player-6/y10.png")
p7_img=loadAnimation("player-7/v1.png","player7/v2.png","player-7/v3.png","player-7/v4.png","player-7/v5.png","player-7/v6.png","player-7/v7.png","player-7/v8.png")
p8_img=loadAnimation("player-8/z1.png","player-8/z2.png","player-8/z3.png","player-8/z4.png","player-8/z5.png","player-8/z6.png")
p9_img=loadAnimation("player-9/l1.png","player-9/l2.png","player-9/l3.png","player-9/l4.png","player-9/l5.png","player-9/l6.png","player-9/l7.png","player-9/l8.png")
p10_img=loadAnimation("player-10/no1.png","player-10/no2.png","player-10/no3.png","player-10/no4.png","player-10/no5.png","player-10/no.6.png")



}

function setup() {

  database = firebase.database();

  createCanvas(displayWidth , displayHeight);



  game = new Game();
  game.getState();
  game.start();

}


function draw() {
  background(255,255,255); 
  
  if(playerCount===4){
game.update(1)
  }
if(gameState===1){
 game.play()
}

}


class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }                                                                               
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
                                 
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    
    p1=createSprite(200,200);
    p1.addAnimation("playerimg",p1_img)
    p2=createSprite(400,400);
    p2.addAnimation("playerimg",p2_img)
    p3=createSprite(600,600)
    p3.addAnimation("playerimg",p3_img)
    p4=createSprite(600,600)
    p4.addAnimation("playerimg",p4_img)
    p5=createSprite(600,600)
    p5=addAnimation("playerimg",p5_img)

    players = [ p1,p2,p3,p4,p5 ]

////////////////////////////////////////////////////////////////////////opponent team <{-_-}>

p6=createSprite(200,200);
p6.addAnimation("playerimg",p6_img)
p7=createSprite(400,400);
p7.addAnimation("playerimg",p7_img)
p8=createSprite(600,600)
p8.addAnimation("playerimg",p8_img)
p9=createSprite(600,600)
p9.addAnimation("playerimg",p9_img)
p10=createSprite(600,600)
p10=addAnimation("playerimg",p10_img)

players = [ p6,p7,p8,p9,p10 ]

  }

  
  play(){
      form.hide();
    
Player.getPlayerInfo()


    if(allPlayers !== undefined  ){
        var index=0 
        var x = 200;
        var y=100
        for(var plr in allPlayers){
          index = index + 1 ;

      y = 100 + (index * 100) + allPlayers[plr].yPos;
      x = 200 ;
        players[index-1].x = x; 
        players[index-1].y = y; 
        }
    if (index === player.index){

      players[index-1].shapeColor ="red"
      camera.position.x = players[index-1].y;
      camera.position.y=displayHeight/2
    }



    

  }


  drawSprites();

}                       
                                                                      
                     
                                        
          
 
                                                                                                
                                                                                                   
                       
                                                             
    
                                                            
 
                         
                                  
                                                                                                  
                
                       
  } 
  
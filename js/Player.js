class Player {
    constructor(){
      this.index = null;
    this.xPos = 0;
    this.name = null;
     }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
              xPos: this.xPos
      });
    }
    getFinishedPlayers(){
      var finishedPlayersRef = database.ref('finishedPlayers');
      finishedPlayersRef.on("value",(data)=>{
          finishedPlayers = data.val();
      });
  }
  /*
  static updateFinishedPlayers(){
      database.ref('/').update({
          finishedPlayers: finishedPlayers + 1
      });
      this.place += 1;
  }*/
  
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  
class Game{
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
          mainmenu = new Mainmenu();
          mainmenu.display(); 
        }
        tank1 =createSprite(100,200);
        tank1.addImage("tank1",tank1Img);
        tank2 = createSprite(600,600);
        tank2.addImage("tank2",tank2Img);
        tanks = [tank1,tank2];
    }
      play(){
       // background(255,255,255);
        mainmenu.hide();
        Player.getPlayerInfo();
        drawSprites();
        if(allPlayers !== undefined){
          //tank1.rotation = World.mouseX;
          //tank1.rotation = World.mouseY;
          var index = 0;
          var x  =  100;
          var y = 600;
          for(var plr in allPlayers){
            index = index + 1;
            x = x + 250
            y = allPlayers[plr].distance;
                        
          }
           
        }
        if(keyIsDown("w") && player.index !== null){
          player.playerY += 10;
          player.update();  
        }
        if(keyIsDown("s") && player.index !== null){
          player.playerY -= 10;
          player.update();
        }
        if(keyIsDown("a") && player.index !== null){
          player.playerX += 10;
          player.update();
        }
        if(keyIsDown("s") && player.index !== null){
          player.playerX -= 10;
          player.update();
        }
        
    }
}

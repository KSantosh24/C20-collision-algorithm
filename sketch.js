var fixedRect,movingrect; 
function setup() {
  createCanvas(1200,800); 
  fixedRect=createSprite(600,400,50,80); 
  fixedRect.shapeColor="green";
  fixedRect.debug="true";
  movingrect=createSprite(400,200,80,30);
   movingrect.shapeColor="green";
   movingrect.debug="true"; }
    function draw() { 
    background(255,255,255);
    movingrect.x=World.mouseX;
    movingrect.y=World.mouseY;
    if(movingrect.x - fixedRect.x < fixedRect.width/2+movingrect.width/2 && 
      fixedRect.x - movingrect.x < fixedRect.width/2 + movingrect.width/2 && 
      movingrect.y - fixedRect.y < fixedRect.height/2+movingrect.height/2 && 
      fixedRect.y - movingrect.y < fixedRect.height/2 + movingrect.height/2 ) {
    movingrect.shapeColor="red"; 
    fixedRect.shapeColor="red"; 
  }
   drawSprites();
   }



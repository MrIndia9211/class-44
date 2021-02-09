var bgimg1;
var player,plyimg;
var invisibleground;
function preload(){
    bgimg1 = loadImage("images/m7.png")
}
function setup(){
createCanvas(1300,800);
backgrounds = createSprite(650,400);
backgrounds.addImage(bgimg1);
backgrounds.scale = 7;
backgrounds.velocityX = -4

player = createSprite(400,710,40,80)

invisibleground = createSprite(420,750,1800,10)
}
function draw(){
background(0)
if(backgrounds.x< 0){
backgrounds.x = 650
}
player.collide(invisibleground);
player.velocityY  -=1 

if(keyDown("space")){
    player.velocityY = -20   
}
drawSprites()
}
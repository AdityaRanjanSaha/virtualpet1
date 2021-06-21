//Create variables here
var foodS,database,dog,dogImage1,dogImage2,foodStock;
function preload()
{
	//load images here
  dogImage1 = loadImage("images/dogImg1.png");
  dogImage2 = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,50,50);
dog.addImage(dogImage2);
dog.scale=0.2;

foodStock = database.ref("food");
foodStock.on("value", readStock)
}


function draw() {  
background(46, 139, 87);

  if(keyWentDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage(dogImage1);
  }
  drawSprites();
  //add styles here
textSize(15);
stroke("black");
fill("white");
text("Note: press UPARROW KEY to feed milk",150,20);

text("Food Remaining: "+ foodS, 170,200);
}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
  if(x>0){
    x = x -1;
  }
  else(x<0);{
    x=0;
  }
  database.ref('/').update({
   food:x 
  })
  }




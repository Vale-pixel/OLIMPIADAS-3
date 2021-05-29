let players= [];
let player = 1;

function setup() {
  createCanvas(400, 400);

  //coordinates of the first frame
  let dx =45;
  let dy =70;

  //arrangement for boxes
  for(let index= 0; index < 9; index ++){
   players.push(new Players(dx,dy));
   dx+=100;
    if(dx>=300){ //continuation boxes
     dx=45;
     dy+=100;
    }
   }
}

function draw() {
  background(200,255,180);

  //show player boxes
  for(let index= 0; index <9; index ++){
   players[index].show();
   }
}

function mousePressed(){

  //change of players
  for(let index= 0; index <9; index ++){
  if(players[index].validateClick(mouseX,mouseY)){
    players[index].returnCase(player);
     if(player==1){
      player=2;
       }else{
        player=1;
       }
     }
   }
}


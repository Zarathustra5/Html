let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d"),
    ant = [];

canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})
//Муровей
function Ant(x, y, v, major, color, width, height, isChosen, isMovingX, isMovingY, xTo, yTo, dirX, dirY){
  this.x = x;
  this.y = y;
  this.v = v;
  this.major = major;
  this.color = color;
  this.width = width;
  this.height = height;
  this.isChosen = isChosen;
  this.isMovingX = isMovingX;
  this.isMovingY = isMovingY;
  this.xTo = xTo;
  this.yTo = yTo;
  this.dirX = dirX;
  this.dirY = dirY;
} 
Ant.prototype.draw = function(){
  ctx.fillStyle = this.color;
  if (this.isChosen){
    ctx.strokeStyle = "white";
    ctx.strokeRect(this.x - 25, this.y - 15, 30, 30);
  }
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  if (this.isMovingX){
    if (this.dirX == 1){
      if (this.x < this.xTo){
        ctx.lineTo(this.x + 2, this.y - 2);
        ctx.lineTo(this.x + 4, this.y - 2);
        ctx.lineTo(this.x + 7, this.y);
        ctx.lineTo(this.x + 4, this.y - 5);
        ctx.lineTo(this.x + 5, this.y - 5);
        ctx.lineTo(this.x + 9, this.y);
        ctx.lineTo(this.x + 8, this.y - 5);
        ctx.lineTo(this.x + 9, this.y - 5);
        ctx.lineTo(this.x + 11, this.y);
        ctx.lineTo(this.x + 12, this.y - 5);
        ctx.lineTo(this.x + 13, this.y - 5);
        ctx.lineTo(this.x + 12, this.y);
        ctx.lineTo(this.x + 16, this.y - 2);
        ctx.lineTo(this.x + 20, this.y - 5);
        ctx.lineTo(this.x + 19, this.y - 5);
        ctx.lineTo(this.x + 16, this.y - 2);
        ctx.lineTo(this.x + 18, this.y + 1);
        ctx.lineTo(this.x + 16, this.y + 4);
        ctx.lineTo(this.x + 19, this.y + 7);
        ctx.lineTo(this.x + 20, this.y + 7);
        ctx.lineTo(this.x + 16, this.y + 4);
        ctx.lineTo(this.x + 12, this.y + 2);
        ctx.lineTo(this.x + 13, this.y + 7);
        ctx.lineTo(this.x + 12, this.y + 7);
        ctx.lineTo(this.x + 11, this.y + 2);
        ctx.lineTo(this.x + 9, this.y + 7);
        ctx.lineTo(this.x + 8, this.y + 7);
        ctx.lineTo(this.x + 9, this.y + 2);
        ctx.lineTo(this.x + 5, this.y + 7);
        ctx.lineTo(this.x + 4, this.y + 7);
        ctx.lineTo(this.x + 7, this.y + 2);
        ctx.lineTo(this.x + 4, this.y + 4);
        ctx.lineTo(this.x + 2, this.y + 4);
        ctx.lineTo(this.x, this.y + 2);
        ctx.closePath();
        ctx.fill();
        this.x += this.dirX * this.v;
      }else{
          this.isMovingX = false;
          this.isMovingY = true;
      }
    }else if (this.dirX == -1){
      if (this.x > this.xTo){
        ctx.lineTo(this.x - 2, this.y + 2);
        ctx.lineTo(this.x - 4, this.y + 2);
        ctx.lineTo(this.x - 7, this.y);
        ctx.lineTo(this.x - 4, this.y + 5);
        ctx.lineTo(this.x - 5, this.y + 5);
        ctx.lineTo(this.x - 9, this.y);
        ctx.lineTo(this.x - 8, this.y + 5);
        ctx.lineTo(this.x - 9, this.y + 5);
        ctx.lineTo(this.x - 11, this.y);
        ctx.lineTo(this.x - 12, this.y + 5);
        ctx.lineTo(this.x - 13, this.y + 5);
        ctx.lineTo(this.x - 12, this.y);
        ctx.lineTo(this.x - 16, this.y + 2);
        ctx.lineTo(this.x - 20, this.y + 5);
        ctx.lineTo(this.x - 19, this.y + 5);
        ctx.lineTo(this.x - 16, this.y + 2);
        ctx.lineTo(this.x - 18, this.y - 1);
        ctx.lineTo(this.x - 16, this.y - 4);
        ctx.lineTo(this.x - 19, this.y - 7);
        ctx.lineTo(this.x - 20, this.y - 7);
        ctx.lineTo(this.x - 16, this.y - 4);
        ctx.lineTo(this.x - 12, this.y - 2);
        ctx.lineTo(this.x - 13, this.y - 7);
        ctx.lineTo(this.x - 12, this.y - 7);
        ctx.lineTo(this.x - 11, this.y - 2);
        ctx.lineTo(this.x - 9, this.y - 7);
        ctx.lineTo(this.x - 8, this.y - 7);
        ctx.lineTo(this.x - 9, this.y - 2);
        ctx.lineTo(this.x - 5, this.y - 7);
        ctx.lineTo(this.x - 4, this.y - 7);
        ctx.lineTo(this.x - 7, this.y - 2);
        ctx.lineTo(this.x - 4, this.y - 4);
        ctx.lineTo(this.x - 2, this.y - 4);
        ctx.lineTo(this.x, this.y - 2);
        ctx.closePath();
        ctx.fill();
        this.x += this.dirX * this.v;
      }else{
          this.isMovingX = false;
          this.isMovingY = true;
      }
    }
  }
  if (this.isMovingY){
    if (this.dirY == 1){
      if (this.y < this.yTo){
        ctx.lineTo(this.x - 2, this.y + 2);
        ctx.lineTo(this.x - 2, this.y + 4);
        ctx.lineTo(this.x, this.y + 7);
        ctx.lineTo(this.x - 5, this.y + 4);
        ctx.lineTo(this.x - 5, this.y + 5);
        ctx.lineTo(this.x, this.y + 9);
        ctx.lineTo(this.x - 5, this.y + 8);
        ctx.lineTo(this.x - 5, this.y + 9);
        ctx.lineTo(this.x, this.y + 11);
        ctx.lineTo(this.x - 5, this.y + 12);
        ctx.lineTo(this.x - 5, this.y + 13);
        ctx.lineTo(this.x, this.y + 12);
        ctx.lineTo(this.x - 2, this.y + 16);
        ctx.lineTo(this.x - 5, this.y + 20);
        ctx.lineTo(this.x - 5, this.y + 19);
        ctx.lineTo(this.x - 2, this.y + 16);
        ctx.lineTo(this.x + 1, this.y + 18);
        ctx.lineTo(this.x + 4, this.y + 16);
        ctx.lineTo(this.x + 7, this.y + 19);
        ctx.lineTo(this.x + 7, this.y + 20);
        ctx.lineTo(this.x + 4, this.y + 16);
        ctx.lineTo(this.x + 2, this.y + 12);
        ctx.lineTo(this.x + 7, this.y + 13);
        ctx.lineTo(this.x + 7, this.y + 12);
        ctx.lineTo(this.x + 2, this.y + 11);
        ctx.lineTo(this.x + 7, this.y + 9);
        ctx.lineTo(this.x + 7, this.y + 8);
        ctx.lineTo(this.x + 2, this.y + 9);
        ctx.lineTo(this.x + 7, this.y + 5);
        ctx.lineTo(this.x + 7, this.y + 4);
        ctx.lineTo(this.x + 2, this.y + 7);
        ctx.lineTo(this.x + 4, this.y + 4);
        ctx.lineTo(this.x + 4, this.y + 2);
        ctx.lineTo(this.x + 2, this.y);
        ctx.closePath();
        ctx.fill();
        this.y += this.dirY * this.v;
      }else{
        this.isMovingY = false;
      }
    }else if (this.dirY == -1){
      if (this.y > this.yTo){
        ctx.lineTo(this.x + 2, this.y - 2);
        ctx.lineTo(this.x + 2, this.y - 4);
        ctx.lineTo(this.x, this.y - 7);
        ctx.lineTo(this.x + 5, this.y - 4);
        ctx.lineTo(this.x + 5, this.y - 5);
        ctx.lineTo(this.x, this.y - 9);
        ctx.lineTo(this.x + 5, this.y - 8);
        ctx.lineTo(this.x + 5, this.y - 9);
        ctx.lineTo(this.x, this.y - 11);
        ctx.lineTo(this.x + 5, this.y - 12);
        ctx.lineTo(this.x + 5, this.y - 13);
        ctx.lineTo(this.x, this.y - 12);
        ctx.lineTo(this.x + 2, this.y - 16);
        ctx.lineTo(this.x + 5, this.y - 20);
        ctx.lineTo(this.x + 5, this.y - 19);
        ctx.lineTo(this.x + 2, this.y - 16);
        ctx.lineTo(this.x - 1, this.y - 18);
        ctx.lineTo(this.x - 4, this.y - 16);
        ctx.lineTo(this.x - 7, this.y - 19);
        ctx.lineTo(this.x - 7, this.y - 20);
        ctx.lineTo(this.x - 4, this.y - 16);
        ctx.lineTo(this.x - 2, this.y - 12);
        ctx.lineTo(this.x - 7, this.y - 13);
        ctx.lineTo(this.x - 7, this.y - 12);
        ctx.lineTo(this.x - 2, this.y - 11);
        ctx.lineTo(this.x - 7, this.y - 9);
        ctx.lineTo(this.x - 7, this.y - 8);
        ctx.lineTo(this.x - 2, this.y - 9);
        ctx.lineTo(this.x - 7, this.y - 5);
        ctx.lineTo(this.x - 7, this.y - 4);
        ctx.lineTo(this.x - 2, this.y - 7);
        ctx.lineTo(this.x - 4, this.y - 4);
        ctx.lineTo(this.x - 4, this.y - 2);
        ctx.lineTo(this.x - 2, this.y);
        ctx.closePath();
        ctx.fill();
        this.y += this.dirY * this.v;
      }else{
        this.isMovingY = false;
      }
    }
  }
  if (!this.isMovingX && !this.isMovingY){
    ctx.lineTo(this.x - 2, this.y + 2);
    ctx.lineTo(this.x - 4, this.y + 2);
    ctx.lineTo(this.x - 7, this.y);
    ctx.lineTo(this.x - 4, this.y + 5);
    ctx.lineTo(this.x - 5, this.y + 5);
    ctx.lineTo(this.x - 9, this.y);
    ctx.lineTo(this.x - 8, this.y + 5);
    ctx.lineTo(this.x - 9, this.y + 5);
    ctx.lineTo(this.x - 11, this.y);
    ctx.lineTo(this.x - 12, this.y + 5);
    ctx.lineTo(this.x - 13, this.y + 5);
    ctx.lineTo(this.x - 12, this.y);
    ctx.lineTo(this.x - 16, this.y + 2);
    ctx.lineTo(this.x - 20, this.y + 5);
    ctx.lineTo(this.x - 19, this.y + 5);
    ctx.lineTo(this.x - 16, this.y + 2);
    ctx.lineTo(this.x - 18, this.y - 1);
    ctx.lineTo(this.x - 16, this.y - 4);
    ctx.lineTo(this.x - 19, this.y - 7);
    ctx.lineTo(this.x - 20, this.y - 7);
    ctx.lineTo(this.x - 16, this.y - 4);
    ctx.lineTo(this.x - 12, this.y - 2);
    ctx.lineTo(this.x - 13, this.y - 7);
    ctx.lineTo(this.x - 12, this.y - 7);
    ctx.lineTo(this.x - 11, this.y - 2);
    ctx.lineTo(this.x - 9, this.y - 7);
    ctx.lineTo(this.x - 8, this.y - 7);
    ctx.lineTo(this.x - 9, this.y - 2);
    ctx.lineTo(this.x - 5, this.y - 7);
    ctx.lineTo(this.x - 4, this.y - 7);
    ctx.lineTo(this.x - 7, this.y - 2);
    ctx.lineTo(this.x - 4, this.y - 4);
    ctx.lineTo(this.x - 2, this.y - 4);
    ctx.lineTo(this.x, this.y - 2);
    ctx.closePath();
    ctx.fill();
  }
}
Ant.prototype.collisionDetection = function(){
  if (this.x + this.width >= canvas.width - river.width){
    this.v = 0;
  }else if (this.y + this.height > canvas.height){
    this.y = 0;
  }
}

//Куст
function Bush(x, y, color){
  this.x = x;
  this.y = y;
  this.color = color;
}
Bush.prototype.draw = function(){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.arc(this.x, this.y, 70, 0, Math.PI, true);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x, this.y - 50);
  ctx.stroke(); 
  ctx.beginPath();
  ctx.moveTo(this.x, this.y - 10);
  ctx.lineTo(this.x + 50, this.y - 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(this.x, this.y - 10);
  ctx.lineTo(this.x - 50, this.y - 20);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(this.x, this.y - 30);
  ctx.lineTo(this.x - 30, this.y - 40);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(this.x, this.y - 30);
  ctx.lineTo(this.x + 30, this.y - 40);
  ctx.stroke();
}

//Муровейник
function Anthill(x, y, color){
  this.x = x;
  this.y = y;
  this.color = color;
}
Anthill.prototype.draw = function(){
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + 30, this.y - 60);
  ctx.lineTo(this.x + 60, this.y - 70);
  ctx.lineTo(this.x + 90, this.y - 80);
  ctx.lineTo(this.x + 120, this.y - 90);
  ctx.lineTo(this.x + 150, this.y - 70);
  ctx.lineTo(this.x + 180, this.y - 60);
  ctx.lineTo(this.x + 210, this.y);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(this.x + 50, this.y - 30);
  ctx.lineTo(this.x + 70, this.y - 50);
  ctx.stroke(); ctx.beginPath();
  ctx.moveTo(this.x + 100, this.y - 40);
  ctx.lineTo(this.x + 105, this.y - 50);
  ctx.lineTo(this.x + 110, this.y - 50);
  ctx.lineTo(this.x + 120, this.y - 70);
  ctx.stroke();
}

//Река
function River(x, y, color, width){
  this.x = x;
  this.y = y;
  this.color = color;
  this.width = width;
}
River.prototype.draw = function(){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, canvas.height);
}
//Создание объектов
function createObjects(){
  river = new River(canvas.width - 200, 0, "blue", 200);
  for (let i = 0; i < 3; i++){
    ant[i] = new Ant(Math.random() * (canvas.width - river.width), Math.random() * canvas.height, 0, "hamster", "black", 10, 5, false, false, false, 1, 1, 1, 1);
  }
  anthill = new Anthill(600, 600, "sienna");
  bush = new Bush(Math.random() * (canvas.width - river.width), Math.random() * canvas.height, "darkGreen");
}
createObjects();

//Цикл
function loop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bush.draw();
  for (let i = 0; i < ant.length; i++){
    ant[i].draw();
    ant[i].collisionDetection();
  }
  anthill.draw();
  river.draw();
  window.requestAnimationFrame(loop);
}
loop();

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    for (let i = 0; i < ant.length; i++){
      if ((x <= ant[i].x) && (x >= ant[i].x - 20) && (y >= ant[i].y - 7) && (y <= ant[i].y + 5)){
        ant[i].isChosen = true;
      }else{
        if (ant[i].isChosen){
          ant[i].v = 1;
          ant[i].isMovingX = true;
          if (x > ant[i].x){
            ant[i].dirX = 1;
            ant[i].xTo = x;
          }else{
            ant[i].dirX = -1;
            ant[i].xTo = x;
          }
          if (y > ant[i].y){
            ant[i].dirY = 1;
            ant[i].yTo = y;
          }else{
            ant[i].dirY = -1;
            ant[i].yTo = y;
          }
        }
        ant[i].isChosen = false;
      }
    }
}

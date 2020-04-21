canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
canvas.width= canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var gradiasi = context.createLinearGradient(0,0, canvas.width,canvas.height);
gradiasi.addColorStop(0,'yellow');
gradiasi.addColorStop(1,'black');


function draw() {

    

    context.save();
  //gelas tertutup
    context.fillStyle = gradiasi;
    context.fill();
    context.fillRect(30,120,100,160);
    context.fillStyle= 'grey';
    context.fillRect(30,120,100,20);
    context.fillStyle = 'yellow';
    context.fillRect(70,95,25,25);


    //gelas terbuka setengah
     context.fillStyle = gradiasi;
     context.fillRect(160,140,100,140);
     context.translate(265,115);
     context.rotate((Math.PI/180)*35);
     context.scale(-1,1);
     context.fillStyle= 'grey';
     context.fillRect(-10,5,100,20);
     context.fillStyle = 'yellow';
     context.fillRect(25,-20,25,25);
     context.restore();



    //gelas terbuka  
     context.fillStyle = gradiasi;
     context.fillRect(290,140,100,140);
     context.translate(390,120);
     context.rotate((Math.PI/180)*90);
     context.scale(-1,1);
     context.fillStyle= 'grey';
     context.fillRect(-20,0,100,20);
     context.fillStyle = 'yellow';
     context.fillRect(15,-25,25,25);
     context.restore();


}
draw();
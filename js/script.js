let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d"); // reinderiza o desenho
let box = 32; //pixels (tamanho)
let Snake =[];
Snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //vai desenhar onde vai ocorrer o jogo
}


function criarCobrinha(){
    for (i=0; i < Snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(Snake[i].x, Snake[i].y, box, box);
    }
}

function iniciarjogo(){
    criarBG();
    criarCobrinha();

    let snakeX = Snake[0].x;
    let snakeY = Snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    Snake.pop();

    let newhead = {
        x: snakeX,
        y: snakeY
    }

    Snake.unshift(newhead);

  }
let jogo = setInterval(iniciarjogo, 100); // intervalo de 100 ms para iniciar o jogo. 


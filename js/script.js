let canvas = document.getElementById("Snake");
let context = canvas.getContext("2d"); // reinderiza o desenho
let box = 32; //pixels (tamanho)
let Snake =[];
Snake[0] = {
    x: 8 * box,
    y: 8 * box
}
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); //vai desenhar onde vai ocorrer o jogo
}
function criarCobrinha(){
    for (i-0; i < Snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(Snake[i].x, Snake[i].y, box, box]);
    }
}

criarBG();
criarCobrinha();


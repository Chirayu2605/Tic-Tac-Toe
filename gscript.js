let board = [
    [" "," "," "],[" "," "," "],[" "," "," "]
]
player = "XO";
let turn = 0;
document.getElementById("intro").innerHTML = `It is player ${player[turn%2]}'s turn`;
function display(button){

    let img = document.createElement("img");
    img.src = (turn%2==0)? "X.png":"O.png";
    button.replaceWith(img);
}
function checkWinner() {
    let currentPlayer = player[turn % 2];
    for (let x = 0; x < 3; x++) {
        if (board[x][0] === currentPlayer && board[x][1] === currentPlayer && board[x][2] === currentPlayer) {
            return true;
        }
    }
    for (let y = 0; y < 3; y++) {
        if (board[0][y] === currentPlayer && board[1][y] === currentPlayer && board[2][y] === currentPlayer) {
            return true;
        }
    }
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }
    return false;
}
function checkDraw(){
    let draw=0;
    for(x=0;x<3;x++){
        for(y=0;y<3;y++){
            if(board[x][y]!=" "){
                draw++;
            }
            else{
                return false;
            }
        }
    }
    if(draw==9){return true;}
    else{return false;}
}
function game(a){
        let button = document.getElementById(a);
        let t = turn
        if(board[a[0]][a[1]]==" "){
            board[a[0]][a[1]] = player[turn%2];
            display(button);
            if(checkWinner()){
                document.getElementById("win").innerHTML = `Congrats!! Player ${player[turn%2]} is the winner`;
            }
            else if(checkDraw()){
                document.getElementById("win").innerHTML = `It's a DRAW!?!`;
            }
            turn+=1;
            document.getElementById("intro").innerHTML = `It is player ${player[turn%2]}'s turn`;
        }
        else{
            document.getElementById("win").innerHTML = `Cell already occupied!?!`;
        }
}


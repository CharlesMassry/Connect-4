document.write("<div></div>");
//board
alert("Go for the Glory, Go for the Score, Go for It, Connect Four!");
var board = [
  ["O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O"],
];
var whoseturn = "Red";
var gamefinished = 0;
while(gamefinished === 0){
  //input
  var fill = false;
  var move = prompt(whoseturn + " turn. What is your move? (1-7)");
  if (move === "stop"){
    break;
  }
  move = parseInt(move);
  var row;
  do {
    while(move != 1 && move != 2 && move != 3 && move != 4 && move != 5 && move != 6 && move != 7){
      move = prompt("Only 1-7, pick again.");
      move = parseInt(move);
    }
    move = move - 1;
    var i = 0;
    if(board[i][move] === "O"){
      for(i = 5; i >= 0; i--){
        if(board[i][move] === "O"){
          var chip = whoseturn.substring(0,1);
          board[i][move] = chip;
          //so the tiles do not overflow i.e. more than the vertical length can hold
          fill = true;
          row = i;
          break;
        }
      }
    } else {
      alert("Column filled, please try a different column");
    }
  } while(fill === false);
  //check if last move made a win
  //horizontal
  if (move < 4) {
    if (board[row][move + 1] === chip && board[row][move + 2] === chip && board[row][move + 3] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move < 5 && move > 0) {
    if (board [row] [move - 1] === chip && board [row] [move + 1] === chip && board [row] [move + 2] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move < 6 && move > 1) {
    if (board [row] [move - 2] === chip && board [row] [move - 1] === chip && board [row] [move + 1] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move > 2) {
    if (board [row] [move - 3] === chip && board [row] [move - 2] === chip  && board [row] [move - 1] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  //vertical
  if (i < 3){
    if (board [row + 1] [move] === chip && board [row + 2] [move] === chip && board [row + 3] [move] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  //diagonal up-right
  if (move < 4 && row > 2) {
    if (board [row - 1] [move + 1] === chip && board [row - 2] [move + 2] === chip && board [row - 3] [move + 3] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move < 5 && move > 0 && row < 5 && row > 1) {
    if (board [row + 1] [move - 1] === chip && board [row - 1] [move + 1] === chip && board [row - 2] [move + 2] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move < 6 && move > 1 && row < 4 && row > 0) {
    if (board [row + 2] [move - 2] === chip && board [row + 1] [move - 1] === chip && board [row - 1] [move + 1] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move > 2 && row < 3) {
    if (board [row + 3] [move - 3] === chip && board [row + 2] [move - 2] === chip  && board [row + 1] [move - 1] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  //diagonal down-right
  if (move > 4 && row < 3) {
    if (board [row + 1] [move + 1] === chip && board [row + 2] [move + 2] === chip && board [row + 3] [move + 3] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move < 5 && move > 0 && row < 4 && row > 0) {
    if (board [row + 1] [move + 1] === chip && board [row + 2] [move + 2] === chip && board [row - 1] [move - 1] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move < 6 && move > 1 && row < 5 && row > 1) {
    if (board [row - 2] [move - 2] === chip && board [row + 1] [move + 1] === chip && board [row - 1] [move - 1] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  if (move > 2 && row > 2) {
    if (board [row - 3] [move - 3] === chip && board [row - 2] [move - 2] === chip  && board [row - 1] [move - 1] === chip) {
      redraw();
      alert("Congratulations! " + whoseturn + " Wins the Game!");
      gamefinished = 1;
      break;
    }
  }
  //display
  redraw();
  //switch turns
  if (whoseturn === "Red"){
    whoseturn = "Black";
  }
  else {
    whoseturn = "Red";
  }
}
function redraw(){
  document.body.innerHTML = "";
  for(var c = 1; c <= 7; c++){
    document.write("<span class='connect_four column'>"+ c + "</span>");
  }
  for(var i = 0; i <= 5; i++) {
    document.write("<div>")
    for (var j = 0; j <= 6; j++){
      if(board[i][j] !== "  "){
        document.write("<span class='connect_four " + board[i][j] + "'>" + "</span>");
      }
    }
    document.write("</div>");
  }
}

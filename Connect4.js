document.write("<div></div>");
//board
alert("Go for the Glory, Go for the Score, Go for It, Connect Four!");
var board = [
	["#", "#", "#", "#", "#", "#", "#"],
	["#", "#", "#", "#", "#", "#", "#"],
	["#", "#", "#", "#", "#", "#", "#"],
	["#", "#", "#", "#", "#", "#", "#"],
	["#", "#", "#", "#", "#", "#", "#"],
	["#", "#", "#", "#", "#", "#", "#"],
];
var whoseturn = "Red";
var gamefinished = 0;
while(gamefinished === 0){
	//input
	var fill = false;
	var move = prompt(whoseturn + " turn. What is your move? (1-7)");
	if (move === "stop"){
		break;
	};
	move = parseInt(move);
		do {
			while(move != 1 && move != 2 && move != 3 && move != 4 && move != 5 && move != 6 && move != 7){
			var move = prompt("Only 1-7, pick again.")
			move = parseInt(move);
			};
		move = move - 1;
		var i = 0;
		if(board[i][move] === "#"){
			for(var i = 5; i >= 0; i--){
				if(board[i][move] === "#"){
					var chip = whoseturn.substring(0,1);
					board[i][move] = chip;
					//so the tiles do not overflow i.e. more than the vertical length can hold
					fill = true;
					break;
				};
			};
		} else {
			alert("Column filled, please try a different column");
		};
	} while(fill === false);
	//check if last move made a win
	//horizontal
	if (move < 4) {
		if (board[i][move + 1] === chip && board[i][move + 2] === chip && board[i][move + 3] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move < 5 && move > 0) {
		if (board [i] [move - 1] === chip && board [i] [move + 1] === chip && board [i] [move + 2] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move < 6 && move > 1) {
		if (board [i] [move - 2] === chip && board [i] [move - 1] === chip && board [i] [move + 1] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move > 3) {
		if (board [i] [move - 3] === chip && board [i] [move - 2] === chip  && board [i] [move - 1] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	//vertical
	if (i < 3){
		if (board [i + 1] [move] === chip && board [i + 2] [move] === chip && board [i + 3] [move] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	//diagonal up-right
	if (move < 4 && i > 2) {
		if (board [i - 1] [move + 1] === chip && board [i - 2] [move + 2] === chip && board [i - 3] [move + 3] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move < 5 && move > 0 && i < 5 && i > 1) {
		if (board [i + 1] [move - 1] === chip && board [i - 1] [move + 1] === chip && board [i - 2] [move + 2] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move < 6 && move > 1 && i < 4 && i > 0) {
		if (board [i + 2] [move - 2] === chip && board [i + 1] [move - 1] === chip && board [i - 1] [move + 1] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move > 2 && i < 3) {
		if (board [i + 3] [move - 3] === chip && board [i + 2] [move - 2] === chip  && board [i + 1] [move - 1] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	//diagonal down-right
	if (move > 4 && i < 3) {
		if (board [i + 1] [move + 1] === chip && board [i + 2] [move + 2] === chip && board [i + 3] [move + 3] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move < 5 && move > 0 && i < 4 && i > 0) {
		if (board [i + 1] [move + 1] === chip && board [i + 2] [move + 2] === chip && board [i - 1] [move - 1] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move < 6 && move > 1 && i < 5 && i > 1) {
		if (board [i - 2] [move - 2] === chip && board [i + 1] [move + 1] === chip && board [i - 1] [move - 1] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	if (move > 2 && i > 2) {
		if (board [i - 3] [move - 3] === chip && board [i - 2] [move - 2] === chip  && board [i - 1] [move - 1] === chip) {
			redraw();
			alert("Congratulations! " + whoseturn + " Wins the Game!");
			gamefinished = 1;
			break;
		};
	};
	//display
	document.body.innerHTML = "";
	document.write("<pre>");
	for(var i = 0; i <= 5; i++) {
		for (var j = 0; j <= 6; j++){
			if(board[i][j] !== "  "){
				document.write(board[i][j] + "  ");
			};
		};
		document.write("<br> <br>");
	};
	//switch turns
	if (whoseturn === "Red"){
		whoseturn = "Black";
	}
	else {
		whoseturn = "Red"
	}
	document.write("</pre>");
};
function redraw(){
	document.body.innerHTML = "";
	document.write("<pre>");
	for(var i = 0; i <= 5; i++) {
		for (var j = 0; j <= 6; j++){
			if(board[i][j] !== "  "){
				document.write(board[i][j] + "  ");
			};
		};
		document.write("<br> <br>");
	};
};
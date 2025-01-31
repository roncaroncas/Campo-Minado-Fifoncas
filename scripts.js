document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll(".clicavel").forEach(td => {
		td.addEventListener("click", function() {
			clickOnCell(this.id)
		});
	});
});

let boardState = [];
let hideBoardState = [];

let gameContinuing = true
let totalBombs = 0

let xSize = 20
let ySize = 10

function clickOnCell(id){

	if (gameContinuing == false){
		return
	}

	var params = id.split('-');
	var x = Number(params[0])
	var y = Number(params[1])

	if (hideBoardState[y][x] == true) {

		console.log("Clicked on: x y = " + params[0] + " " + params[1] + "    Val:" + boardState[params[1]][params[0]]);
	
		hideBoardState[params[1]][params[0]] = false

		
		if (boardState[params[1]][params[0]] > 0) {
			document.getElementById(id).style.color = 'blue';
			document.getElementById(id).style.background = "#ffffff";
			document.getElementById(id).textContent = boardState[params[1]][params[0]];
			
		} else if (boardState[params[1]][params[0]] == -1) {
			document.getElementById(id).style.color = 'red';
			document.getElementById(id).textContent = "X";
			document.getElementById(id).style.background = "#ffffff";
			gameContinuing = false;

		} else { 
			document.getElementById(id).style.background = "#ffffff";	
		}


		console.log("Ate aqui, mioh ainda!");

		//Auto click em volta se for 0
		if (boardState[y][x] == 0){
			console.log("SOU ZERO")
			
			var vizinhos = [[x+1,y], [x+1,y+1], [x,y+1], [x-1,y+1],
						[x-1,y], [x-1,y-1], [x,y-1], [x+1,y-1]]

			console.log("vizinhos:")
			console.log(vizinhos)

			for (let i=0; i<8; i++){
				console.log("x, y = " + x + " " + y + "   i.Value: " + i)
				if ((vizinhos[i][0]>=0) && (vizinhos[i][0]<xSize) && (vizinhos[i][1]>=0) && (vizinhos[i][1]<ySize)){
					console.log("chamei o vizinho");
					clickOnCell(vizinhos[i][0]+'-'+vizinhos[i][1]);
				}
			}

		}
	
		
	}


	gameOver(params[0], params[1]);
	
	return	
}

function newGame(x=xSize, y=ySize){
	
	/*
	//Limpando o texto de todas as células
	document.querySelectorAll(".clicavel").forEach(td => {
		td.textContent="";
	});

	//Limpando a frase do Resultado
	document.getElementById("resultado").textContent = "";
	*/

	// Limpando a tabela antiga
	var table = document.getElementById("board");
	table.innerHTML = "";

	gameContinuing = true
	document.getElementById("resultado").textContent = "";
	
	//recriando tabela
	var row
	var cell

	for (let j=0; j<y; j++) {
		row = table.insertRow()
		for (let i=0; i<x; i++) {
			cell = row.insertCell();
			cell.id = i + "-" + j;
			cell.classList.add("clicavel");
			cell.setAttribute('onclick', "clickOnCell('" + cell.id + "')");
		} 
	}

	//Criando bombas (-1)
	let isBomb;
	boardState = [];
	hideBoardState = [];
	totalBombs = 0;
	for (let j=0; j<y; j++) {
		boardState.push([]);
		hideBoardState.push([]);
		for (let i=0; i<x; i++) {
			isBomb = -1*(Math.random()>0.85)
			boardState[j][i] = isBomb;
			hideBoardState[j][i] = true
			if (isBomb == -1){
				totalBombs ++;
			}
		} 
	}

	document.getElementById("totalBombs").textContent = "Sao " + totalBombs + " Bombas no jogo!!";

	console.log(boardState);
	console.log(hideBoardState);

	var numBombs

	//trocar os valores sem bomba, para a quantidade de bombas vizinhas
	for (let j=0; j<y; j++) {
		for (let i=0; i<x; i++) {
			
			var numBombs = 0

			//South
			if (j < y-1) {
				if (boardState[j+1][i] == -1){
					numBombs++;
				}
			}


			//SW
			if ((i > 0) && (j < y-1)) {
				if (boardState[j+1][i-1] == -1){
					numBombs++;
				}
			}


			//West
			if (i > 0) {
				if (boardState[j][i-1] == -1){
					numBombs++;
				}
			}

			//NW
			if ((i > 0) && (j > 0) ) {
				if (boardState[j-1][i-1] == -1){
					numBombs++;
				}
			}


			//North
			if (j > 0) {
				if (boardState[j-1][i] == -1){
					numBombs++;
				}
			}

			//NE
			if ((i < x-1) && (j > 0)) {
				if (boardState[j-1][i+1] == -1){
					numBombs++;
				}
			}
			//East
			if (i < x-1) {
				if (boardState[j][i+1] == -1){
					numBombs++;
				}
			}

			//SW
			if ((i < x-1) && (j < y-1)) {
				if (boardState[j+1][i+1] == -1){
					numBombs++;
				}
			}


			if (boardState[j][i] == 0){
				boardState[j][i] = numBombs;
			}
			
		} 
	}
}

function gameOver(x, y){


	//Condição de Derrota!
	if (boardState[y][x] == -1) {
		
		console.log("BOOOM BOOOM")
		document.getElementById("resultado").textContent = "BOOOOOM BOOOM";
		return
	}

	//Condição de Vitória!
	var numHideCells

	numHideCells = 0

	for (let j=0; j<ySize; j++) {
		for (let i=0; i<xSize; i++) {
			if (hideBoardState[j][i] == true){
				numHideCells++
			}
		}
	}

	

	if (totalBombs == numHideCells) {
		console.log("totalBombs " + totalBombs)
		document.getElementById("resultado").textContent = "Voce ganhou!!!";
	}

}
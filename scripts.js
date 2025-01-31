document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll(".clicavel").forEach(td => {
		td.addEventListener("click", function() {
			trocarNXO(this.id)
		});
	});
});

function trocarNXO(id){

	if (document.getElementById(id).textContent == "X"){
		document.getElementById(id).textContent = "O";
	} else if (document.getElementById(id).textContent == "O"){
		document.getElementById(id).textContent = "";
	} else {
		document.getElementById(id).textContent = "X";
	}

	gameOver();
	
}

function newGame(){
	
	//Limpando o texto de todas as células
	document.querySelectorAll(".clicavel").forEach(td => {
		td.textContent="";
	});

	//Limpando a frase do Resultado
	document.getElementById("resultado").textContent = "";


/*
	// Limpando a tabela antiga
	var table = document.getElementById("board");
	table.innerHTML = "";
	
	//recriando tabela
	var row
	var cell

	var abc = ["A", "B", "C"];
	
	for (var a in abc) {
		row = table.insertRow()
		for (let i=1; i<=3; i++) {
			cell = row.insertCell()
			cell.id = abc[a] + i
			cell.classList.add("clicavel")
			//cell.setAttribute('onclick', "trocarNXO('" + cell.id + "')");
		} 
	}
*/

}

function gameOver(){

	let table = document.getElementById("board");

    let boardState = [];

    for (let i = 0; i < table.rows.length; i++) {
        let linha = [];
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            linha.push(table.rows[i].cells[j].textContent);
        }
        boardState.push(linha);
    }

	// console.log(matriz);


	//ler o que está na tela e salvar em um array

	var xWinner = "Parabens! Roncas ganhou!";
	var oWinner = "Parabens! Fifian perdeu!";

	//Ganhou em uma linha?
	for (let i=0; i<=2; i++) {
		if (("X" == boardState[i][0]) && ("X" == boardState[i][1]) && ("X" == boardState[i][2])) {
			document.getElementById("resultado").textContent = xWinner;
		}
		else if (("O" == boardState[i][0]) && ("O" == boardState[i][1]) && ("O" == boardState[i][2])) {
			document.getElementById("resultado").textContent = oWinner;
		}
	}
	
	//Ganhou em uma coluna??
	for (let i=0; i<=2; i++) {
		if (("X" == boardState[0][i]) && ("X" == boardState[1][i]) && ("X" == boardState[2][i])) {
			document.getElementById("resultado").textContent = xWinner;
		}
		else if (("O" == boardState[0][i]) && ("O" == boardState[1][i]) && ("O" == boardState[2][i])) {
			document.getElementById("resultado").textContent = oWinner;
		}
	}
	
	//Ganhou na D1?
	if (("X" == boardState[0][0]) && ("X" == boardState[1][1]) && ("X" == boardState[2][2])) {
		document.getElementById("resultado").textContent = xWinner;
	}
	else if (("O" == boardState[0][0]) && ("O" == boardState[1][1]) && ("O" == boardState[2][2])) {
		document.getElementById("resultado").textContent = oWinner;
	}

	
	//Ganhou na D2?	
	if (("X" == boardState[2][0]) && ("X" == boardState[1][1]) && ("X" == boardState[0][2])) {
		document.getElementById("resultado").textContent = xWinner;
	}
	else if (("O" == boardState[2][0]) && ("O" == boardState[1][1]) && ("O" == boardState[0][2])) {
		document.getElementById("resultado").textContent = oWinner;
	}


}
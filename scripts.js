function trocarNXO(id){

	if (document.getElementById(id).textContent == "X"){
		document.getElementById(id).textContent = "O";
	} else if (document.getElementById(id).textContent == "O"){
		document.getElementById(id).textContent = "";
	} else {
		document.getElementById(id).textContent = "X";
	}
	
}

function newGame(){

	
	// Limpando a tabela antiga
	var table = document.getElementById("board");
	table.innerHTML = "";

	
	var row
	var cell

	var abc = ["A", "B", "C"];
	
	for (var a in abc) {
		row = table.insertRow()
		for (let i=1; i<=3; i++) {
			cell = row.insertCell()
			cell.id = abc[a] + i
			cell.classList.add("clicavel")
			cell.setAttribute('onclick', "trocarNXO('" + cell.id + "')");
		} 
	}

	

}
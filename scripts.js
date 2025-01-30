function trocarNXO(id){

	 window.alert("tchau")

	if (document.getElementById(id).textContent == "X"){
		document.getElementById(id).textContent = "O";
	} else if (document.getElementById(id).textContent == "O"){
		document.getElementById(id).textContent = "";
	} else {
		document.getElementById(id).textContent = "X";
	}
	
}

function newGame(){

	window.alert("tchau")

	/*

	//Removendo toda a tabela de id = board

	var new_tbody = document.createElement('tbody');
	populate_with_new_rows(new_tbody);
	old_tbody.parentNode.replaceChild(new_tbody, old_tbody)

	var tbl = document.getElementById("board");
    if(tbl){
    	tbl.parentNode.removeChild(tbl);
    }

    window.alert("tchau")
   	}
    

	var body = document.getElementsByTagName('body')[0];
	var tbl = document.createElement('table');
	tbl.style.width = '100%';
	tbl.setAttribute('border', '1');
	var tbdy = document.createElement('tbody');
	for (var i = 0; i < 3; i++) {
    	var tr = document.createElement('tr');
    	for (var j = 0; j < 2; j++) {
      		if (i == 2 && j == 1) {
        		break
      		} else {
        		var td = document.createElement('td');
        		td.appendChild(document.createTextNode('\u0020'))
		        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
		        tr.appendChild(td)
      		}
    	}
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}

*/

}
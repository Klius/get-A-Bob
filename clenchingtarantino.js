//aqui ira toda la logica del programa
function startAnim(element){
	element.className = "coverAnim";
}
window.onload = function() {
 chooseBob();
}
function chooseBob(){
	BOBS = BOBBYS.length;
	selectedBOB = Math.floor(Math.random() * BOBS) + 0;
	BOB = BOBBYS[selectedBOB];
	rellenaPagina(BOB);
}
function rellenaPagina(BOB){
	document.getElementById("bob-title").innerHTML=BOB.title;
	//document.getElementById("bob-desc").innerHTML=BOB.description;
	document.getElementById("bob-img").src = 'bobs/img/'+BOB.img;
}
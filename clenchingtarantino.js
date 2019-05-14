//aqui va toda la logica del programa
function startAnim(element){
	element.className = "coverAnim";
	document.getElementById("bob-title").style="";
	document.getElementById("bob-img").style="";
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
function anotherBob(){
	document.getElementById("cover").className="reloadCover";
	document.getElementById("bob-title").style="opacity:0";
	document.getElementById("bob-img").style="opacity:0";
	chooseBob();
}

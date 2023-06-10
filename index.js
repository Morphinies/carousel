

const image = {
	curImg : 1,
	checkBtns(){
		const btnBack = document.getElementById("btn-back");
		const btnNext = document.getElementById("btn-next");
		btnBack.style.display = document.getElementById("img" + (this.curImg - 1)) ? "block" : "none";
		btnNext.style.display = document.getElementById("img" + (this.curImg + 1)) ? "block" : "none";
	},
	changeImg(action){
		document.getElementById("img" + this.curImg).style.display = "none";
		this.curImg += action === "next" ? 1 : -1;
		document.getElementById("img" + this.curImg).style.display = "block";
		this.checkBtns();
	}
}

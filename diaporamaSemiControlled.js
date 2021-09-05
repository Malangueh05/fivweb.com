class DiaporamaSemiControlled {

	constructor(time, slides) {

		this.i = 0;
		this.time = time;
		this.slideIndex = 1;
		this.slides = slides;
		this.slides[this.slideIndex-1].style.display = "block";
		this.autoPlay = setInterval(() => {this.changeDiapositiveToRight()}, this.time);
	    this.arrowLeft = document.getElementById("arrow_left");
	    this.arrowRight = document.getElementById("arrow_right");
	    this.arrowLeft.addEventListener("click", () => {
	    	clearInterval(this.autoPlay);
	    	this.changeDiapositiveToLeft();
	    	this.autoPlay = setInterval(() => {this.changeDiapositiveToRight()}, this.time);
	    });
	    this.arrowRight.addEventListener("click", () => {
	    	clearInterval(this.autoPlay);
	    	this.changeDiapositiveToRight();
	    	this.autoPlay = setInterval(() => {this.changeDiapositiveToRight()}, this.time);
	    });
	}


	//Méthode pour faire passer le diaporama vers l'image suivante
	changeDiapositiveToRight() {

		for (this.i = 0; this.i < this.slides.length; this.i++) {
			this.slides[this.i].style.display = "none";  
		}
	  	this.slideIndex++;
	  	if (this.slideIndex > this.slides.length) {
	  		this.slideIndex = 1;
	  	}
	  	this.slides[this.slideIndex-1].style.display = "block";
	}


	//Méthode pour faire passer le diaporama vers l'image précédente
	changeDiapositiveToLeft() {
	     
	    for (this.i = 0; this.i < this.slides.length; this.i++) {
			this.slides[this.i].style.display = "none";  
		}
	  	this.slideIndex--;
	  	if (this.slideIndex == 0) {
	  		this.slideIndex = this.slides.length;
	  	}
	  	this.slides[this.slideIndex-1].style.display = "block";
	}
}
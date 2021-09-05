class DiaporamaSimplified {

	constructor(time, slides) {

		this.i = 0;
		this.time = time;
		this.slideIndex = 1;
		this.slides = slides;
		this.slides[this.slideIndex-1].style.display = "block";
		this.autoPlay = setInterval(() => {this.changeDiapositiveToRight()}, this.time);
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
}
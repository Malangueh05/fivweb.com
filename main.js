//Le diaporama du hero

let slides = document.getElementsByClassName("slide");
let diaporamaOnHero = new DiaporamaSemiControlled(5000, slides);




//Le diaporama des skills

let skillSlides = document.getElementsByClassName("skill_slide");
let diaporamaOnSkills = new DiaporamaSimplified(3000, skillSlides);



/*
//Le formulaire
let form = document.querySelector("form"); //Récupérer le formulaire dans une fariable

//let description = document.getElementById("description");//Le block où s'affiche la description de la station cliquée
let firstName; //Le prénom saisi par l'utilisateur
let name; //Le nom saisi par l'utilisateur

//Pré remplir les champs prénom et nom avec le web storage
//form.elements[0].value = localStorage.getItem("prenom");
//form.elements[1].value = localStorage.getItem("nom");


//Ecouter et gérer la soumission du formulaire
form.addEventListener("submit", function(e) {

	//Annuler la soumission du formulaire
    e.preventDefault();

    //Déterminer le model regex du prénom et du prénom
    let regexFirstName,
    	regexName;

    regexFirstName = regexName = /\w+/;

    //Vérifier qu'une satation est bien sélectionnée
    if(description.textContent === "(Cliquez sur une station dans la carte pour afficher les détails)") {

    	description.textContent = "Veuillez sélectionner une station sur la carte pour réserver un vélo svp !";
        description.style.color = "red";
        description.style.fontSize = "1em";
        description.style.fontStyle = "normal";

    } else if(!regexFirstName.test(form.elements[0].value)) {//Vérifier que le prénom est bien valide

    	let firstNameAlert = document.getElementById("first_name_alert");

    	firstNameAlert.style.color = "red";
    	firstNameAlert.style.textAlign = "right";
    	firstNameAlert.textContent = "Prénom invalide !";

    } else if(!regexName.test(form.elements[1].value)) {//Vérifier que le nom est bien valide

    	let nameAlert = document.getElementById("name_alert");

    	nameAlert.style.color = "red";
    	nameAlert.style.textAlign = "right";
    	nameAlert.textContent = "Nom invalide !";

    } else {//Toutes les données sont présentes et correctement renseignées

    	//Effacer tous les éventuels messages d'alerte sur les prénom et nom
    	let firstNameAlert = document.getElementById("first_name_alert");
    	firstNameAlert.textContent = "";

    	let nameAlert = document.getElementById("name_alert");
    	nameAlert.textContent = "";

    	//Enregistrer dans le web storage les informations renseignées dans le formulaire
    	firstName = form.elements[0].value; //Le prénom saisi par l'utilisateur
        name = form.elements[1].value; //Le nom saisi par l'utilisateur

        //Stoquer les identifiants de celui qui réserve le vélo dans le localStorage
        localStorage.setItem("prenom", firstName);
        localStorage.setItem("nom", name);
        reserver = localStorage.getItem("prenom") + " " + localStorage.getItem("nom");//Identifiants de l'utilisateur

        //Récupérer les infos sur la station sélectionnée, préalablement stoquées dans le sessionStorage
        stationName = sessionStorage.getItem("station");//Nom de la station
        stationCapacity = sessionStorage.getItem("capacite");//Capacité de la station
        bikesAvailable = sessionStorage.getItem("velosDisponibles");//Nombre de vélo disponible

        //Afficher le cadre du canvas pour la signature
    	document.getElementById("canvas_block").style.display = "flex";

    	//Activer la possibilité de dessiner
    	signature.activation();

    	//créer le bouton de validation de la signature
		let validate = signature.createValidationButton();

		//Ecouter et réagir au clique sur le bouton de validation de la signature
		validate.addEventListener("click", function() {

			//Actualiser les paramètres de l'instance de réservation
        	rapportDeReservation.changeData(bookingDisplayHtmlElt, stationName, stationCapacity, bikesAvailable, reserver, min);

			//Vérifier la présence de la signature
			if(signature.noSignature()) {//Le canvas est vide, donc pas de signature

				signature.createAlertMessage();//Afficher un message d'alerte

			} else {//Le canvas a du contenu, dons signature présente

				if(document.getElementById("signature_alert")) {//Un message d'alerte est présent suite à une omission de signer

					signature.clearAlertMessage();// Effacer le message d'alerte
				}

				bookingDisplayHtmlElt.style.display = "block";

				if(localStorage.getItem("disponibilite de la réservation") === "réservation en cours") {//Une réservation préalable est toujours en cours

					rapportDeReservation.stopCountdown();//Arrêter la réservation en cours
				}

				rapportDeReservation.startCountdown();//Lancer la réservation actuelle
				signature.clearCanvas();//Effacer la signature pour une eventuelle nouvelle signature
				signature.removeValidationButton();//Supprimer le bouton de réservation pour éviter sa duplication lors de la prochaine réservation
				document.getElementById("canvas_block").style.display = "none";//Faire disparaitre le block du canvas
			}
		});
	}
});

*/

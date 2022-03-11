/* eslint-disable no-undef */
/* eslint-enable no-unused-vars */

//Fonction permettant de récuperer les informations sur les photogrpahes dans le JSON 
async function getPhotographers() {
	// Penser à remplacer par les données récupérées dans le json
	let res = await fetch('/data/photographers.json')
	if (res.ok) {
		data = await res.json()
	} else {
		console.error('retour serveur : ', res.status)
	}

	// et bien retourner le tableau photographers seulement une fois

	return {
		photographers: [...data.photographers],
	}
}

// Afficher les cartes de profil
async function displayData(photographers) {
	//Emplacement dans lequel afficher les cartes 
	const photographersSection = document.querySelector('.photographer_section')

	//Boucle qui réalise une carte pour chaque photographe selon le factory pattern dédié
	photographers.forEach((photographer) => {
		//appel du photographerFactory avec le bon modèle (getIndexPhotographerCard)
		const indexPhotographerModel = photographerFactory(photographer)
		const indexPhotographerCard = indexPhotographerModel.getIndexPhotographerCard()
		//Introduire chaque carte dans la section dédiée
		photographersSection.appendChild(indexPhotographerCard)
	})
}

// Récupère les datas des photographes pour les envoyer dans le displayData de manière asynchrone
async function init() {
	const { photographers } = await getPhotographers()
	displayData(photographers)
}

init()

/* eslint-disable no-undef */
/* eslint-enable no-unused-vars */
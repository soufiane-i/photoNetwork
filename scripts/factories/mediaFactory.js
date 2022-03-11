/* eslint-disable no-undef */
/* eslint-enable no-unused-vars */

function mediaFactory(data) {
	//Attribution des data venant du json à des variables
	const { id, photographerId, title, image, video, likes, date, price } = data

	//Recuperation des photos et videos correspondantes au profil via son nom dans sa carte de presentation
	const photographerName = document.querySelector('.photographer-name').innerText
	const photographerFirstName = photographerName.substring(0, photographerName.indexOf(' ')).replace('-', ' ')
	const imageAsset = `../assets/media/${photographerFirstName}/${image}`
	const videoAsset = `../assets/media/${photographerFirstName}/${video}`

	//Creation des cartes dans la galerie
	function getMediaCardDOM() {
		//Creer le corps global de la mediaCard
		const cardMedia = document.createElement('div')
		const cardMediaContainer = document.createElement('div')
		const cardMediaBottom = document.createElement('div')
		const cardMediaTitle = document.createElement('div')
		const cardMediaLikeSection = document.createElement('div')

		cardMedia.classList.add('card-photo')
		cardMediaContainer.classList.add('card-photo-container')
		cardMediaBottom.classList.add('card-photo-bottom')
		cardMediaTitle.classList.add('card-photo-title')
		cardMediaLikeSection.classList.add('like-photo')
        
		cardMediaTitle.textContent = title
		cardMediaTitle.setAttribute('tabindex', '0')
		cardMediaLikeSection.setAttribute('tabindex', '0')
		cardMediaLikeSection.setAttribute('aria-label', 'likes')
		cardMediaLikeSection.innerHTML = `<span class="like-local-number">${likes}</span><span class="fas fa-heart fa-lg like-heart heart icon"></span>`

		cardMedia.appendChild(cardMediaContainer)
		cardMedia.appendChild(cardMediaBottom)
		cardMediaBottom.appendChild(cardMediaTitle)
		cardMediaBottom.appendChild(cardMediaLikeSection)
		//Diffrence d'attributs et de classes enfonction de la nature du media(photo ou video)
		let cardMediaElement
		//Diffrence entre photo et video faite à partir de la propriété video du fichier json present seulement dans les objects contenant une video
		if (video == undefined) {
			cardMediaElement = document.createElement('img')
			cardMediaElement.setAttribute('src', imageAsset)	
			cardMediaContainer.appendChild(cardMediaElement)
		} else {
			cardMediaElement = document.createElement('video')
			cardMediaElement.setAttribute('src', videoAsset)
			cardMediaElement.classList.add('videoElement')
			cardMediaContainer.appendChild(cardMediaElement)
		} 
		//Attributs et classe valable quelque soit la nature du media
		cardMediaElement.setAttribute('tabindex', '0')
		cardMediaElement.setAttribute('name', title)
		cardMediaElement.setAttribute('alt', title)
		cardMediaElement.classList.add('media')
		cardMediaElement.setAttribute('data-date', date)
		cardMediaElement.setAttribute('id', id)
		cardMediaElement.setAttribute('aria-hidden', 'false')

		return(cardMedia)

	} return { id, photographerId, title, image, video, likes, date, price, getMediaCardDOM }
} 

/* eslint-disable no-undef */
/* eslint-enable no-unused-vars */
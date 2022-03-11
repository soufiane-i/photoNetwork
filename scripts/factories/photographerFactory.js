/* eslint-disable no-undef */
/* eslint-enable no-unused-vars */

function photographerFactory(data) {
	const { name, portrait, city, country, tagline, price, id } = data

	//Recuperation de la photo de profil
	const photographerPortrait = `../assets/media/Photographers ID Photos/${portrait}`

	//Récupération de l'id dans l'URL
	const queryString = window.location.search 
	const urlParams = new URLSearchParams(queryString)
	
	//Différencier le pattern pour l'index.html et celui pour le photographer.html
	if(urlParams.has('id')){
		getUserProfileDOM() 
		return { name, photographerPortrait, city, country, tagline, price, id, getUserProfileDOM }
	} else if(urlParams.has('id') == false) {
		getIndexPhotographerCard()
		return { name, photographerPortrait, city, country, tagline, price, id, getIndexPhotographerCard }
	}

	//Creation des cartes de profil dans index.html
	function getIndexPhotographerCard() {
		const article = document.createElement( 'article' )
		const profileHeader = document.createElement('a')
		const img = document.createElement( 'img' )
		const h2 = document.createElement( 'h2' )
		const locationDiv = document.createElement( 'div' )
		const tagLineDiv = document.createElement('div')
		const priceDiv = document.createElement('div')
		const infosDiv = document.createElement('div')
		article.classList.add('profile')
		profileHeader.setAttribute('href', `./src/photographer.html?id=${id}`)
		profileHeader.setAttribute('aria-label', `profile de ${name}`)
		profileHeader.setAttribute('aria-label', `informations sur ${name}`)
		profileHeader.setAttribute('role', 'link')
		img.setAttribute('src', photographerPortrait)
		img.setAttribute('alt', name)
		infosDiv.setAttribute('tabindex', '0')
		infosDiv.classList.add('infosDiv')
		profileHeader.classList.add('profile-header')
		locationDiv.classList.add('location')
		priceDiv.classList.add('price')
		tagLineDiv.classList.add('tagLine')
	
		h2.textContent = name
		locationDiv.textContent = city + ', ' + country
		tagLineDiv.textContent = tagline
		priceDiv.textContent = price + '€/jour'
	
		infosDiv.appendChild(locationDiv)
		infosDiv.appendChild(tagLineDiv)
		infosDiv.appendChild(priceDiv)
		article.appendChild(profileHeader)
		article.appendChild(infosDiv)
		profileHeader.appendChild(img)
		profileHeader.appendChild(h2)
	
		return (article)
	}

	//Creation de la carte de profil dans photographer.html
	function getUserProfileDOM() {
		const contactName = document.querySelector('.contact-name')
		const photographerContent = document.createElement('div')
		const photographerProfile = document.createElement('div')
		const imgDiv = document.createElement('div')
		const photographerPhoto = document.createElement('img')
		const photographerBtn = document.createElement('div')
		const h2 = document.createElement('h2')
		const infosDiv = document.createElement('div')
		const location = document.createElement('span')
		const tagLine = document.createElement('span')

		photographerContent.classList.add('photographer-content')
		photographerProfile.classList.add('photographer-profile')
		photographerBtn.classList.add('contact_buttonDiv')
		infosDiv.classList.add('infosDiv')
		h2.classList.add('photographer-name')
		h2.setAttribute('tabindex', '0')
		infosDiv.setAttribute('tabindex', '0')
		imgDiv.setAttribute('tabindex', '0')
		location.classList.add('photographer-city')
		tagLine.classList.add('photographer-tagline')
		imgDiv.classList.add('img-div')
		
		photographerBtn.innerHTML = '<button class="contact_button" id="photograph_button" onclick="displayModal()" aria-haspopup="dialog">Contactez-moi</button>'
		h2.textContent = data.name
		location.textContent = data.city + ', ' + data.country
		tagLine.textContent = data.tagline
		contactName.textContent = name

		photographerPhoto.setAttribute('src', photographerPortrait)
		photographerPhoto.setAttribute('alt', name)
		imgDiv.setAttribute('aria-label', name)

		photographerProfile.appendChild(h2)
		infosDiv.appendChild(location)
		infosDiv.appendChild(tagLine)
		photographerProfile.appendChild(infosDiv)
		photographerContent.appendChild(photographerProfile)
		photographerContent.appendChild(photographerBtn)
		imgDiv.appendChild(photographerPhoto)
		photographerContent.appendChild(imgDiv)

		return(photographerContent)
	}
} 


/* eslint-disable no-undef */
/* eslint-enable no-unused-vars */
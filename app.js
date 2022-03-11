

//olof search
// searchBar.addEventListener('keyup' , (e) => {
// 	document.querySelector("#food-card-section").innerHTML = ""
// 	const searchString = e.target.value;
// 	const filteredCharacters = hits.filter(search => {
// 		return String(search.recipe.label).toLowerCase().includes(searchString.toLowerCase())
		
// 	});
	
// 	if (searchString === "") {
// 		console.log(filteredCharacters)
// 		loop()
// 	} else {
// 		for(let i = 0; i < filteredCharacters.length; i++) {

// 			let label = filteredCharacters[i].recipe.label
	
// 			let imgUrl = filteredCharacters[i].recipe.image
	
// 			let dishType = filteredCharacters[i].recipe.dishType.join(" / ")
	
// 			let totalTime = filteredCharacters[i].recipe.totalTime
	
// 			document.querySelector("#food-card-section")
// 			.innerHTML += 
// 			`
// 			<div class="card-div">
// 				<div class="card-label-wrapper">
// 					<h1 class="card-label">${label}</h1>
// 				</div>
// 				<img class="card-img" src="${imgUrl}" alt="">
// 				<p class="card-dishType">${dishType}</p>
// 				<button class="card-btn">See more</button>
// 			</div>
// 			`
// 		}
// 	}
// });

//olof search end

// Lukas Code start --------------------------------


// Skapar funktioner för att öppna och stänga modelen
const openModal = () => {
	document.querySelector('#modal-div').style.display='flex'
}

const closeModal = () => {
	document.querySelector('#modal-div').style.display='none'
}



// När man klickar på submit knappen blir 'text' det man skrivit i sök-rutan, t.ex. 'pizza'. Denna text skickas med 
// 	till functionen fetchDataAPI. 

// e.preventDefault() gör att sidan inte uppdateras när man klickar på submit. 

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
	openModal()

	document.querySelector("#food-card-section").innerHTML = ''
	e.preventDefault()

	let text = document.getElementById('text')
	fetchDatAPI(text.value)
})

//property är det man skrev i textrutan, t.ex. pizza, vilket blir det som söks. 

async function fetchDatAPI(property) {
	const app_key = 'ac0e5b86b0b49bedecc8e83ba02a64a4'
	const app_id = '95c34c74'
	
	const result = await fetch(`https://api.edamam.com/search?q=${property}&app_id=${app_id}&app_key=${app_key}`)
	const data = await result.json()
	const hits = data.hits
	
	
	if (hits.length === 0) {
		emptyCard()
	} else {
		loop(hits)
	}
	closeModal()
}

const loop = (hits) => {
	for(let i = 0; i < hits.length; i++) {

		let label = hits[i].recipe.label

		let imgUrl = hits[i].recipe.image

		let dishType = hits[i].recipe.dishType.join(" / ")

		let totalTime = hits[i].recipe.totalTime

		document.querySelector("#food-card-section")
		.innerHTML += 
		`
		<div class="card-div">
			<div class="card-label-wrapper">
				<h1 class="card-label">${label}</h1>
			</div>
			<img class="card-img" src="${imgUrl}" alt="">
			<p class="card-dishType">${dishType}</p>
			<button class="card-btn">See more</button>
		</div>
		`
	}
}

const emptyCard = () => {
	console.log('emptyCard körs')
	document.querySelector("#food-card-section").innerHTML = 
	`
	<div id="no-search" class="card-div">
				<div class="card-label-wrapper">
				</div>
				<p class="card-dishType">No search results... try again</p>
			</div>
	`
}


// Lukas Code start --------------------------------



// HOW map. WORKS
/*
const array = [
	{number: 1},
	{number: 2},
	{number: 3},
	{number: 4},
]
array.map(
	(post) => console.log(post.number)
)
*/

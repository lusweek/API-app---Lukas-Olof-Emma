

let hits = {}

let ingrediences = []
let lable = ""
let imgUrl = "" 
let dishType = []
let totalTime = 0

//olof search
searchBar.addEventListener('keyup' , (e) => {
	document.querySelector("#food-card-section").innerHTML = ""
	const searchString = e.target.value;
	const filteredCharacters = hits.filter(search => {
		return String(search.recipe.label).toLowerCase().includes(searchString.toLowerCase())
	});
	
	if (searchString === "") {
		loop()
	} else {
		for(let i = 0; i < filteredCharacters.length; i++) {

			let label = filteredCharacters[i].recipe.label
	
			let imgUrl = filteredCharacters[i].recipe.image
	
			let dishType = filteredCharacters[i].recipe.dishType.join(" / ")
	
			let totalTime = filteredCharacters[i].recipe.totalTime
	
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
});

//olof search end

async function fetchDatAPI() {
	const app_key = 'ac0e5b86b0b49bedecc8e83ba02a64a4'
	const app_id = '95c34c74'
	const search = "veggi"
	
	 baceURL = `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`;
	result = await fetch(baceURL);
// Fyller mitt tomma objekt med data
	data = await result.json()
	hits = data.hits
	console.log(hits[0].recipe)
}

const loop = () => {
	for(let i = 0; i < hits.length; i++) {

		let label = hits[i].recipe.label
		console.log(label)

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

const timeout = setTimeout(() => [
	// getIngredienses()
	loop()
], 2000);


/* DENNA DATA VILL JAG HA
	lable = "",
	imgUrl = "", 
	dishType = [],
	totalTime = 0
*/




/* INGRITIENSER
const getIngredienses = () => {
	const ingredients = hits[1].recipe.ingredients
	for(let i = 0; i <= ingredients.length; i++){
	console.log(ingredients)
	}
}
*/

window.addEventListener("load", () => fetchDatAPI())
 


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

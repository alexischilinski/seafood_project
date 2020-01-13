const seafoodContainer = document.querySelector('.fish-list')
const speciesForm = document.querySelector('.fish-form')
const speciesInput = document.querySelector('.fish-input')

const modal = document.querySelector('.modal')
const trigger = document.querySelector('.info-button')
const closeButton = document.querySelector('.close-button')

const fishData = document.querySelector('.fish-data')
const fishImage = document.querySelector('.fish-image')
const fishInfo = document.querySelector('.info')
const scientificName = document.querySelector('.scientific-name')
const fishLocation = document.querySelector('.location')
const biology = document.querySelector('.biology')
const population = document.querySelector('.population')
const bestHarvest = document.querySelector('.best-harvest')
const fishingRate = document.querySelector('.fishing-rate')
const availability = document.querySelector('.availability')
const healthBenefits = document.querySelector('.health-benefits')


fetch('http://localhost:3000/fish')
    .then(response=>response.json())
    .then(fishes=>fishes.sort(aToZ).map(fishNames))


function aToZ(a, b){
    if (a.name < b.name){return -1}
    else if (a.name > b.name){return 1}
    else {return 0}
}

function fishNames(fish){
    const fishName = document.createElement('li')
    const infoButton = document.createElement('button')

    fishName.innerText = `${fish.name} `
    fishName.className = "fish-name"
    infoButton.className = "info-button"

    infoButton.addEventListener('click', event => {
        fishImage.src = fish.image
        scientificName.innerText = fish.scientific_name
        fishLocation.innerHTML = fish.location
        biology.innerHTML = fish.biology
        population.innerText = fish.population
        bestHarvest.innerText = fish.best_harvest
        fishingRate.innerText = fish.fishing_rate
        availability.innerHTML = fish.availability
        healthBenefits.innerHTML = fish.health_benefits
        modal.classList.toggle('show-modal')
    })
    closeButton.addEventListener('click', toggleModal)
    window.addEventListener('click', windowOnClick)


    fishName.appendChild(infoButton)
    seafoodContainer.appendChild(fishName)
}


speciesForm.addEventListener('click', (event) => {
    event.preventDefault()

    const formData = new FormData(speciesForm)
    const fishArray = Array.prototype.slice.call(document.querySelectorAll('.fish-name'))
    fishArray.forEach(fish=>{
        if (fish.innerText.toLowerCase().includes((formData.get('species')).toLowerCase())){
            fish.style.display = ""
        } else {
            fish.style.display = "none"
        }
    })
})


function toggleModal(){
    modal.classList.toggle('show-modal')
}

function windowOnClick(event){
    if (event.target === modal){
        toggleModal();
    }
}


const map = document.querySelector('#svg')
map.addEventListener('load', ()=>{
    const mapDocument = map.contentDocument
    const west = mapDocument.querySelector('.west')
    west.addEventListener('click', ()=>{
        alert("west")
    })
})
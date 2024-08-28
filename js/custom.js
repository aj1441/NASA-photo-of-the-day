let newArray4Cards=[];

function makeWork() {
    getPhotoDataApi();
    createCards();
};

function getPhotoDataApi() {
fetch('https://api.nasa.gov/planetary/apod?count=3&api_key=spUnYRblEmcJfrS5h58I9Lh794AOtQ3rCcnOltEG')
.then (response => response.json())
.then (data => {
    newArray4Cards = data;
    console.log('Data fetched and stored in global array:', newArray4Cards);
})
.catch (error => console.error('Error:', error));
};
// getPhotoDataApi ();
const container = document.getElementById("cards");

function createCards() {
    for (let item of newArray4Cards) {
        let cardContainer = document.createElement("div");
        cardContainer.className = "card-wrapper";
        cardContainer.innerHTML= `<div class="card" id="card">
     <h4 class="project-title">${item.title}</h4>
     <img class="card-image" src=${item.url} alt="${item.image}">
     <p class="card-description">${item.explanation}</p>
      <p class="card-date">"Date: ${item.date}"</p>
      <p class="card-credits">"Photographer: ${item.copyright}"</p>`
    
     container.appendChild(cardContainer);
    }
}

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}

refreshButton.addEventListener('click', refreshPage)
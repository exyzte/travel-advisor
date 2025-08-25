const nav = document.querySelector('.navbar')
fetch('./navbar.html')
.then(response => response.text())
.then(data=>{
    nav.innerHTML = data;
})

const search = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const resultContainer = document.querySelector('.result-container');

searchButton.addEventListener('click', () => {
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const searchTerm = search.value.toLowerCase();
        const result = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        )
        if (result.length === 0) {
            resultContainer.innerHTML = '<p>No results found.</p>';
            return;
        } else {
        resultContainer.innerHTML = result.map(item => 
            `<div class="result-item">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <img src="${item.imageUrl}" alt="${item.name}">`
        ).join('');
    }

    });
});
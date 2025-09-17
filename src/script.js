function getCharacters() {
    fetch('http://localhost:3000/data/characters.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
}

// afficher dans la consoles
getCharacters();

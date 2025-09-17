function getCharacters() {
    fetch('http://localhost:3000/data/characters.json')
        .then(response => response.json())
        .then(data => {
            const characterList = document.getElementById('characters');
            const ul = document.createElement('ul');
            data.forEach(character => {
                const li = document.createElement('li');
                li.textContent = character.name;
                characterList.appendChild(li);
            });
        });
}

// afficher dans la consoles
getCharacters();



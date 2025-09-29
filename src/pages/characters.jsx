import { useEffect } from 'react';
import CharactersList from '../components/CharactersList.jsx'
import NumberOfCharacters from '../components/NumberOfCharacters.jsx';
import { getCharacters } from '../api/characters-api.js';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Characters | Marvel App";

    // Get the list of characters from the API
    const characters = getCharacters();

    return (
    <div>
        <header>
            <h2>Marvel Characters</h2>
        </header>
        
        <CharactersList list={characters} />
        <br />
        <NumberOfCharacters list={characters} />
    </div>
  );
}

export default CharactersPage;

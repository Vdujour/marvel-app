import { useLoaderData } from 'react-router-dom';
import CharactersList from '../components/CharactersList.jsx'
import NumberOfCharacters from '../components/NumberOfCharacters.jsx';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Characters | Marvel App";

    // Get the list of characters from the loader
    const characters = useLoaderData();

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

import { useEffect } from 'react';
import CharactersList from '../components/CharactersList.jsx'
import characters from '../data/characters.json';

function CharactersPage() {
  useEffect(() => {
    document.title = "Marvel App";
  }, []);

  return (
    <div>
        <header>
            <h2>Marvel Characters</h2>
        </header>
        
        <CharactersList list={characters} />
    </div>
  );
}

export default CharactersPage;

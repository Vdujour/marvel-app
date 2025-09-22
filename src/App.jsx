import './App.css'
import characters from './data/characters.json'
import CharactersList from './components/CharactersList.jsx'
import NumberOfCharacters from './components/NumberOfCharacters.jsx' ;

function App() {

  return (
    <div>
      <h1>Hello World from react with JSX</h1>
      <CharactersList list={characters} />
      <NumberOfCharacters list={characters} />
    </div>
  );
}

export default App;


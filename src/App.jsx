import './App.css'
import characters from './data/characters.json';

function App() {

  const characterList = characters.map((character) => (<li key={character.id}>{character.name}</li>));
  
  return (
    <div>
      <h1>Hello World from react with JSX</h1>
      <ul>
        {characterList}
      </ul>
    </div>
  );
}

export default App;

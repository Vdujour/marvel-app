import './App.css'
import characters from './data/characters.json'
import CharactersList from './components/CharactersList.jsx';

function App() {

  return (
    <div>
      <h1>Hello World from react with JSX</h1>
      <CharactersList list={characters} />
    </div>
  );
}

export default App;


import './App.css'
import characters from './data/characters.json'
import CharactersList from './components/CharactersList.jsx'
import NumberOfCharacters from './components/NumberOfCharacters.jsx' 
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';

/*
function App() {

  return (
    <div>
      <h1>Hello World from react with JSX</h1>
      <CharactersList list={characters} />
      <NumberOfCharacters list={characters} />
    </div>
  );
}*/
/*
function App() {

  return (
    <>
      <AboutPage />
    </>
  );
}*/

function App() {

  return (
    <>
      <ContactPage />
    </>
  );
}


export default App;


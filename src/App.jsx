import './App.css'
/*import characters from './data/characters.json'
import CharactersList from './components/CharactersList.jsx'
import NumberOfCharacters from './components/NumberOfCharacters.jsx'*/
import AboutPage from './pages/about.jsx'
import ContactPage from './pages/contact.jsx'
import CharactersPage from './pages/characters.jsx'
import HomePage from './pages/home.jsx';
import Layout from './layout.jsx'
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CharactersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;


import { useLoaderData } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail.jsx';

const CharacterDetailPage = () => {
    // Get the character data from the loader
    const character = useLoaderData();

    // Change the title of the page
    document.title = `${character?.name || 'Character'} | Marvel App`;

    if (!character) {
        return (
            <div>
                <header>
                    <h2>Personnage non trouvé</h2>
                </header>
                <p>Le personnage demandé n'existe pas.</p>
            </div>
        );
    }

    return (
        <div>
            <header>
                <h2>Détails du personnage</h2>
            </header>
            
            <CharacterDetail character={character} />
        </div>
    );
};

export default CharacterDetailPage;

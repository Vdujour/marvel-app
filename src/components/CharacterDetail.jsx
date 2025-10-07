const CharacterDetail = ({ character }) => {
    if (!character) {
        return (
            <div>
                <p>Aucun personnage à afficher.</p>
            </div>
        );
    }

    // Construire l'URL de l'image si elle existe
    const imageUrl = character.thumbnail && character.thumbnail.path && character.thumbnail.extension
        ? `${character.thumbnail.path}.${character.thumbnail.extension}`
        : null;

    return (
        <div className="character-detail">
            {imageUrl && (
                <div className="character-image">
                    <img 
                        src={imageUrl} 
                        alt={character.name}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
            )}
            
            <div className="character-info">
                <h3>{character.name}</h3>
                
                {character.description && character.description.trim() !== "" && (
                    <div className="character-description">
                        <h4>Description:</h4>
                        <p>{character.description}</p>
                    </div>
                )}
                
                {character.modified && (
                    <p><strong>Dernière modification:</strong> {new Date(character.modified).toLocaleDateString('fr-FR')}</p>
                )}
                
                {(!character.description || character.description.trim() === "") && (
                    <p className="no-description">Aucune description disponible pour ce personnage.</p>
                )}
            </div>
        </div>
    );
};

export default CharacterDetail;
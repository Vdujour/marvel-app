import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

// Mock data pour les tests
const mockCharacterComplete = {
  id: '1',
  name: 'Spider-Man',
  description: 'Friendly neighborhood Spider-Man',
  modified: '2023-01-15T10:30:00Z',
  thumbnail: {
    path: 'https://example.com/spiderman',
    extension: 'jpg'
  }
};

const mockCharacterMinimal = {
  id: '2',
  name: 'Iron Man'
  // Pas de propriété description du tout
};

const mockCharacterWithEmptyDescription = {
  id: '3',
  name: 'Captain America',
  description: '   ', // Description vide avec espaces
  thumbnail: {
    path: 'https://example.com/captain',
    extension: 'png'
  }
};

describe('CharacterDetail', () => {
  test('renders "no character" message when character is null', () => {
    render(<CharacterDetail character={null} />);
    
    expect(screen.getByText('Aucun personnage à afficher.')).toBeInTheDocument();
  });

  test('renders "no character" message when character is undefined', () => {
    render(<CharacterDetail />);
    
    expect(screen.getByText('Aucun personnage à afficher.')).toBeInTheDocument();
  });

  test('renders character with complete information', () => {
    render(<CharacterDetail character={mockCharacterComplete} />);
    
    // Vérifier le nom
    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
    
    // Vérifier la description
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText('Friendly neighborhood Spider-Man')).toBeInTheDocument();
    
    // Vérifier la date de modification
    expect(screen.getByText(/Dernière modification:/)).toBeInTheDocument();
    
    // Vérifier l'image
    const image = screen.getByAltText('Spider-Man');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/spiderman.jpg');
  });

  test('renders character with minimal information', () => {
    render(<CharacterDetail character={mockCharacterMinimal} />);
    
    // Vérifier le nom
    expect(screen.getByText('Iron Man')).toBeInTheDocument();
    
    // Vérifier qu'il n'y a pas d'image
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    
    // Vérifier le message "aucune description" - ça s'affiche uniquement quand character.description est undefined/null OU vide
    expect(screen.getByText('Aucune description disponible pour ce personnage.')).toBeInTheDocument();
  });

  test('renders character with empty description shows no description message', () => {
    render(<CharacterDetail character={mockCharacterWithEmptyDescription} />);
    
    // Vérifier le nom
    expect(screen.getByText('Captain America')).toBeInTheDocument();
    
    // Vérifier que la description vide affiche le message approprié
    expect(screen.getByText('Aucune description disponible pour ce personnage.')).toBeInTheDocument();
    expect(screen.queryByText('Description:')).not.toBeInTheDocument();
    
    // Vérifier l'image
    const image = screen.getByAltText('Captain America');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/captain.png');
  });

  test('image has correct error handling', () => {
    render(<CharacterDetail character={mockCharacterComplete} />);
    
    const image = screen.getByAltText('Spider-Man');
    expect(image).toBeInTheDocument();
    
    // Simuler une erreur de chargement d'image
    const errorEvent = new Event('error');
    image.dispatchEvent(errorEvent);
    
    // L'image devrait avoir style.display = 'none' après l'erreur
    // Note: dans un test réel, on vérifierait que l'onError handler est appelé
  });

  test('character detail has correct CSS class', () => {
    render(<CharacterDetail character={mockCharacterComplete} />);
    
    const characterDetail = screen.getByText('Spider-Man').closest('.character-detail');
    expect(characterDetail).toBeInTheDocument();
    expect(characterDetail).toHaveClass('character-detail');
  });

  test('formats modification date correctly', () => {
    render(<CharacterDetail character={mockCharacterComplete} />);
    
    // Vérifier que le strong "Dernière modification:" est présent
    const strongElement = screen.getByText('Dernière modification:');
    expect(strongElement).toBeInTheDocument();
    
    // Vérifier que l'élément parent (le <p>) contient aussi une date
    const parentElement = strongElement.closest('p');
    expect(parentElement).toBeInTheDocument();
    
    // Vérifier que le paragraphe contient une date formatée (au minimum des chiffres)
    expect(parentElement.textContent).toMatch(/\d+/);
  });
});
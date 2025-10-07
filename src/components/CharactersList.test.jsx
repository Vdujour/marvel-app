import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharactersList from './CharactersList';

// Mock data pour les tests
const mockCharacters = [
  { id: '1', name: 'Spider-Man' },
  { id: '2', name: 'Iron Man' },
  { id: '3', name: 'Captain America' }
];

// Helper function pour wrap le composant avec Router
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('CharactersList', () => {
  test('renders empty list when no characters provided', () => {
    renderWithRouter(<CharactersList />);
    
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('characters-list');
    expect(list).toBeEmptyDOMElement();
  });

  test('renders empty list when empty array provided', () => {
    renderWithRouter(<CharactersList list={[]} />);
    
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toBeEmptyDOMElement();
  });

  test('renders list of characters with correct links', () => {
    renderWithRouter(<CharactersList list={mockCharacters} />);
    
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('characters-list');
    
    // Vérifier que tous les personnages sont affichés
    mockCharacters.forEach(character => {
      const link = screen.getByRole('link', { name: character.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/characters/${character.id}`);
    });
  });

  test('renders correct number of list items', () => {
    renderWithRouter(<CharactersList list={mockCharacters} />);
    
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockCharacters.length);
  });

  test('each character has correct NavLink structure', () => {
    renderWithRouter(<CharactersList list={mockCharacters} />);
    
    const firstCharacterLink = screen.getByRole('link', { name: mockCharacters[0].name });
    expect(firstCharacterLink).toHaveAttribute('href', `/characters/${mockCharacters[0].id}`);
    
    const lastCharacterLink = screen.getByRole('link', { name: mockCharacters[2].name });
    expect(lastCharacterLink).toHaveAttribute('href', `/characters/${mockCharacters[2].id}`);
  });
});
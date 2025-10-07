import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharacterDetailPage from './characterDetailPage';

// Mock de useLoaderData
const mockUseLoaderData = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: () => mockUseLoaderData(),
}));

// Mock du composant CharacterDetail
jest.mock('../components/CharacterDetail.jsx', () => {
  return function MockCharacterDetail({ character }) {
    return (
      <div data-testid="character-detail">
        Character Detail for: {character?.name || 'Unknown'}
      </div>
    );
  };
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('CharacterDetailPage', () => {
  beforeEach(() => {
    // Reset du mock avant chaque test
    mockUseLoaderData.mockClear();
  });

  test('renders character detail when character data is available', () => {
    const mockCharacter = {
      id: '1',
      name: 'Spider-Man',
      description: 'Friendly neighborhood Spider-Man'
    };

    mockUseLoaderData.mockReturnValue(mockCharacter);

    renderWithRouter(<CharacterDetailPage />);
    
    // Vérifier le titre de la page
    expect(screen.getByRole('heading', { name: 'Détails du personnage' })).toBeInTheDocument();
    
    // Vérifier que le composant CharacterDetail est rendu
    expect(screen.getByTestId('character-detail')).toBeInTheDocument();
    expect(screen.getByText('Character Detail for: Spider-Man')).toBeInTheDocument();
  });

  test('renders "character not found" when no character data', () => {
    mockUseLoaderData.mockReturnValue(null);

    renderWithRouter(<CharacterDetailPage />);
    
    // Vérifier le message d'erreur
    expect(screen.getByRole('heading', { name: 'Personnage non trouvé' })).toBeInTheDocument();
    expect(screen.getByText("Le personnage demandé n'existe pas.")).toBeInTheDocument();
    
    // Vérifier que CharacterDetail n'est pas rendu
    expect(screen.queryByTestId('character-detail')).not.toBeInTheDocument();
  });

  test('renders "character not found" when undefined character data', () => {
    mockUseLoaderData.mockReturnValue(undefined);

    renderWithRouter(<CharacterDetailPage />);
    
    // Vérifier le message d'erreur
    expect(screen.getByRole('heading', { name: 'Personnage non trouvé' })).toBeInTheDocument();
    expect(screen.getByText("Le personnage demandé n'existe pas.")).toBeInTheDocument();
  });

  test('sets correct document title with character name', () => {
    const mockCharacter = {
      id: '1',
      name: 'Iron Man'
    };

    mockUseLoaderData.mockReturnValue(mockCharacter);

    renderWithRouter(<CharacterDetailPage />);
    
    expect(document.title).toBe('Iron Man | Marvel App');
  });

  test('sets default document title when no character name', () => {
    mockUseLoaderData.mockReturnValue(null);

    renderWithRouter(<CharacterDetailPage />);
    
    expect(document.title).toBe('Character | Marvel App');
  });

  test('has correct header structure', () => {
    const mockCharacter = { id: '1', name: 'Thor' };
    mockUseLoaderData.mockReturnValue(mockCharacter);

    renderWithRouter(<CharacterDetailPage />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Détails du personnage');
  });
});
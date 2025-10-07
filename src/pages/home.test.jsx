import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './home';

// Mock du composant CharactersPage
jest.mock('./CharactersPage.jsx', () => {
  return function MockCharactersPage() {
    return <div data-testid="characters-page">Characters Page Content</div>;
  };
});

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('HomePage', () => {
  test('renders home page with CharactersPage component', () => {
    const { getByTestId } = renderWithRouter(<HomePage />);
    
    // Vérifier que le composant CharactersPage est rendu
    expect(getByTestId('characters-page')).toBeInTheDocument();
  });

  test('sets correct document title', () => {
    renderWithRouter(<HomePage />);
    
    expect(document.title).toBe('Home - Marvel App');
  });
});
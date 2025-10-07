import { render, screen } from '@testing-library/react';
import NotFoundPage from './notFound';

describe('NotFoundPage', () => {
  test('renders 404 error message', () => {
    render(<NotFoundPage />);
    
    // Vérifier le titre principal
    expect(screen.getByRole('heading', { name: '404 - Page Not Found' })).toBeInTheDocument();
    
    // Vérifier le message d'erreur
    expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
  });

  test('sets correct document title', () => {
    render(<NotFoundPage />);
    
    expect(document.title).toBe('404 - Page Not Found');
  });

  test('has correct heading level', () => {
    render(<NotFoundPage />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('404 - Page Not Found');
  });
});
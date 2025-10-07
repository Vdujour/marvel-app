import { render, screen } from '@testing-library/react';
import AboutPage from './about';

describe('AboutPage', () => {
  test('renders about page content', () => {
    render(<AboutPage />);
    
    // Vérifier le titre
    expect(screen.getByRole('heading', { name: 'About us' })).toBeInTheDocument();
    
    // Vérifier le contenu
    expect(screen.getByText('We are a team of marvel fans who loves to create awesome apps !')).toBeInTheDocument();
  });

  test('sets correct document title', () => {
    render(<AboutPage />);
    
    expect(document.title).toBe('About | Marvel App');
  });

  test('has correct header structure', () => {
    render(<AboutPage />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('About us');
  });
});
import { render, screen } from '@testing-library/react';
import ContactPage from './contact';

describe('ContactPage', () => {
  test('renders contact page content', () => {
    render(<ContactPage />);
    
    // Vérifier le titre
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
    
    // Vérifier le contenu de base
    expect(screen.getByText(/Feel free to contact us at :/)).toBeInTheDocument();
  });

  test('renders email link correctly', () => {
    render(<ContactPage />);
    
    const emailLink = screen.getByRole('link', { name: 'contact@marvelapp.com' });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:contact@marvelapp.com');
  });

  test('sets correct document title', () => {
    render(<ContactPage />);
    
    expect(document.title).toBe('Contact | Marvel App');
  });

  test('has correct header structure', () => {
    render(<ContactPage />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Contact Us');
  });
});
// src/pages/CharactersPage.test.jsx
import { expect, test, jest } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CharactersPage from './CharactersPage'

// Mock react-router-dom hooks and components
jest.mock('react-router-dom', () => ({
    useLoaderData: () => [
        {
            id: "1",
            name: "Thor"
        },
        {
            id: "2",
            name: "Captain America"
        }
    ],
    Link: ({ to, children }) => <a href={to}>{children}</a>,
    NavLink: ({ to, children }) => <a href={to}>{children}</a>
}));

test('render CharactersPage component', () => {
    render(<CharactersPage />)

    // Check if the heading exists
    const heading = screen.getByRole('heading', { level: 2, name: 'Marvel Characters' })
    expect(heading).toBeInTheDocument()
    
    // Check if document title is set correctly
    expect(document.title).toBe('Characters | Marvel App')
    
    // Check if Thor is in the document
    const thorElement = screen.getByText('Thor');
    expect(thorElement).toBeInTheDocument();
    
    // Check if Captain America is in the document
    const captainAmericaElement = screen.getByText('Captain America');
    expect(captainAmericaElement).toBeInTheDocument();
    
    // Check if the number of characters is displayed
    const numberOfCharactersElement = screen.getByText('There is 2 characters');
    expect(numberOfCharactersElement).toBeInTheDocument();
})
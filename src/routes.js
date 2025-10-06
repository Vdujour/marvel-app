import AboutPage from './pages/about.jsx';
import CharactersPage from './pages/CharactersPage.jsx';
import CharacterDetailPage from './pages/characterDetailPage.jsx';
import ContactPage from './pages/contact.jsx';
import Layout from './layout.jsx';
import NotFoundPage from './pages/notFound.jsx';
import { getCharacters, getCharacterById } from './api/characters-api.js';


// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        Component: CharactersPage,
        loader: () => getCharacters()
      },
      {
        // about page
        path: "/about",
        Component: AboutPage
      },
      {
        // character detail page
        path: "/characters/:id",
        Component: CharacterDetailPage,
        loader: ({ params }) => getCharacterById(params.id)
      },
      {
        // contact page
        path: "/contact",
        Component: ContactPage
      },
      {
        // 404 page
        path: "*",
        Component: NotFoundPage
      }
    ],
  },
]

export default routes;
import AboutPage from './pages/about.jsx';
import CharactersPage from './pages/characters.jsx';
import ContactPage from './pages/contact.jsx';
import Layout from './layout.jsx';
import NotFoundPage from './pages/notFound.jsx';
import { getCharacters } from './api/characters-api.js';


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
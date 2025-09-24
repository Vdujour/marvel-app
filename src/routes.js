import AboutPage from './pages/about.jsx';
import CharactersPage from './pages/characters.jsx';
import ContactPage from './pages/contact.jsx';
import Layout from './layout.jsx';

// routes of the application
const routes = [
  {
    path: "/",
    Component: Layout,
    children: [
      {
        // main page
        index: true,
        Component: CharactersPage
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
    ],
  },
]

export default routes;
import AboutPage from './pages/about.jsx';
import CharactersPage from './pages/CharactersPage.jsx';
import CharacterDetailPage from './pages/characterDetailPage.jsx';
import ContactPage from './pages/contact.jsx';
import Layout from './layout.jsx';
import NotFoundPage from './pages/notFound.jsx';
import { getCharacters, getCharacterById, DEFAULT_FILTER, DEFAULT_ORDER } from './api/characters-api.js';
import { redirect } from 'react-router-dom';


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
        // loader reads query params and enforces default values for orderBy and order
        // If either is missing, redirect to the same path with defaults set in the URL.
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const params = url.searchParams;

          const orderBy = params.get('orderBy');
          const order = params.get('order');

          // If any of the two params is missing, set defaults and redirect
          if (!orderBy || !order) {
            const newParams = new URLSearchParams(params);
            if (!orderBy) newParams.set('orderBy', DEFAULT_FILTER);
            if (!order) newParams.set('order', DEFAULT_ORDER);

            const redirectUrl = `${url.pathname}?${newParams.toString()}`;
            return redirect(redirectUrl);
          }

          // both params present -> return characters using those values
          return getCharacters(orderBy, order);
        }
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
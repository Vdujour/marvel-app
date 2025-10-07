import CharactersPage from './CharactersPage.jsx';
import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    document.title = "Home - Marvel App";
  }, []);

  return (
    <>
      <CharactersPage />
    </>
  );
}

export default HomePage;

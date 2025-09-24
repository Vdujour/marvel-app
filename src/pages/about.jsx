import { useEffect } from 'react';

function AboutPage() {
    useEffect(() => {
        document.title = "About | Marvel App";
    }, []);

  return (
    <div>
        <header>
            <h2>About us</h2>
        </header>

        <p>We are a team of marvel fans who loves to create awesome apps !</p>
    </div>
  );
}

export default AboutPage;
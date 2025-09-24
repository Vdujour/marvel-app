import { useEffect } from 'react';

function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Marvel App";
  }, []);

  return (
    <div>
        <header>
            <h2>Contact Us</h2>
        </header>

        <p>Feel free to contact us at : <a href="mailto:contact@marvelapp.com">contact@marvelapp.com</a></p>
    </div>
  );
}

export default ContactPage;


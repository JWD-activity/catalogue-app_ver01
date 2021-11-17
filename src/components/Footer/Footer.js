import React from 'react';
import './Footer.module.css';

function Footer({ author }) {
  return (
    <footer>
      Made with &#10084; In Melbourne, Australia &#183; Coded by {author}
    </footer>
  );
}

export default Footer;

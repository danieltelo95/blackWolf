import React from 'react';
import tarotimage from '../../assets/images/tarotbg.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      {/* Navigation bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className="flex items-center">
            {/* Puedes agregar aquí el logo o elementos adicionales */}
          </div>

          {/* Navigation links */}
          <div className={styles.navLinksContainer} id="navbarSupportedContentX">
            <ul className={styles.navLinks}>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#!">
                  Sobre Mí
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#!">
                  Cursos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero section with background image, heading, subheading and button */}
      <div className="relative h-[300px] overflow-hidden bg-no-repeat bg-center flex items-center justify-center">
        <img 
          src={tarotimage} 
          alt="Tarot Background" 
          className="h-auto max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </header>
  );
};

export default Header;

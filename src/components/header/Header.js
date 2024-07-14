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
          </div>

          {/* Navigation links */}
          <div className={styles.navLinksContainer} id="navbarSupportedContentX">
            <ul className={styles.navLinks}>
              <li className={styles.navItem}>
                <a
                  className={styles.navLink}
                  href="#!"
                >
                  Sobre Mí
                </a>
              </li>
              <li className={styles.navItem}>
                <a
                  className={styles.navLink}
                  href="#!"
                >
                  Cursos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero section with background image, heading, subheading and button */}
      <div className={styles.header} style={{ backgroundImage: `url(${tarotimage})` }}>
      </div>
    </header>
  );
};

export default Header;

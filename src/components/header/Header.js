import React from 'react';
import tarotimage from '../../assets/images/tarotbg.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>

          {/* Navigation links */}
          <div className="flex justify-between w-full">
            <ul className={`${styles.navLinks} flex`}>
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
            <ul className={`${styles.navLinks} flex`}>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#!">
                  Iniciar sesión
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navLink} href="#!">
                  Registrarse
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

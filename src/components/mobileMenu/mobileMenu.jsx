// MobileMenu.js

import styles from './mobileMenu.module.css';

const MobileMenu = ({ isOpened }) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpened ? styles.opened : ''}`}>
      {/* Conteúdo do seu menu mobile */}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default MobileMenu;

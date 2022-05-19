import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './navbar.module.css';

const Nav = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbar__logo}>
      <a href="/">코알라</a>
    </div>
    <ul className={styles.navbar__menu}>
      <li>
        <a href="/myPage">
          <AccountCircleIcon />
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;

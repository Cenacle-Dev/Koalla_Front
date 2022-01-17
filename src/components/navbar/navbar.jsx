import React from "react";
import styles from "./navbar.module.css";

const Nav = () => {
	return (
		<>
			<nav className={styles.navbar}>
				<div className={styles.navbar__logo}>
					<a href="/">코알라</a>
				</div>
				<ul className={styles.navbar__menu}>
					<li>
						<a href="/myPage">마이 페이지</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;

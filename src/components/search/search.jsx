import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = ({ searchMeeting }) => {
	const inputRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		const title = inputRef.current.value.trim();
		searchMeeting(title);
	};
	return (
		<>
			<div className={styles.search}>
				<form className={styles.search__form} onSubmit={handleSubmit}>
					<button type="submit">찾기</button>
					<input
						className={styles.input}
						type="text"
						placeholder="찾고 있는 모임을 알려주세요."
						ref={inputRef}
					/>
				</form>
			</div>
		</>
	);
};

export default Search;

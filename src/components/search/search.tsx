import React from "react";
import * as styles from "./styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ searchMeeting }: any) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<>
			<styles.Search>
				<styles.Form onSubmit={handleSubmit}>
					<button type="submit">
						<SearchIcon />
					</button>
					<styles.Input
						type="text"
						placeholder="찾고 있는 모임을 알려주세요."
					/>
				</styles.Form>
			</styles.Search>
		</>
	);
};

export default Search;

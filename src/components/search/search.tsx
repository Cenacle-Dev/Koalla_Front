import React from "react";
import * as S from "./styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ searchMeeting }: any) => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<>
			<S.Search>
				<S.Form onSubmit={handleSubmit}>
					<button type="submit">
						<SearchIcon />
					</button>
					<S.Input type="text" placeholder="찾고 있는 모임을 알려주세요." />
				</S.Form>
			</S.Search>
		</>
	);
};

export default Search;

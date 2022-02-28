import styled from "styled-components";

const Search = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 160px;
	padding: 10px;
`;

const Form = styled.form`
	display: flex;
	position: absolute;
	top: 100px;
	align-items: center;
	border-bottom: 1px solid white;
	padding: 5px;
`;

const Input = styled.input`
	width: 340px;
	height: 30px;
	border: none;
	color: white;
	background-color: transparent;
	outline: none;
	::placeholder {
		color: white;
	}
`;

export { Search, Form, Input };

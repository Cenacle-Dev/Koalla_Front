import styled from "styled-components";

const Meeting = styled.li`
	width: 20vw;
	border: 1px solid transparent;
	border-radius: 6px;
	height: 260px;
	background-color: white;
	margin: auto;
`;

const Img = styled.img`
	width: 100%;
	height: 50%;
	border: 1px solid transparent;
	border-radius: 6px;
`;

const Description = styled.div`
	text-align: left;
	padding: 2px;
	margin-left: 3px;
`;

export { Meeting, Description, Img };

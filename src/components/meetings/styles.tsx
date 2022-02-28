import styled from "styled-components";

const Meetings = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 480px) {
		flex-direction: column;
		justify-content: flex-start;
	}
`;

export { Meetings };

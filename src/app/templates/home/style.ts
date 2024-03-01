import styled from "styled-components";

export const MainContainer = styled.section`
	width: 100%;
	background-color: ${({ theme }) => theme.background};
	padding: 1rem;
`;

export const SecondaryContainer = styled.section`
	width: 100%;
	background-color: ${({ theme }) => theme.container};
	border-radius: 2rem;
	/* padding: 1rem; */
`;

import styled from "styled-components";
export const SearchBarContainer = styled.div`
	background: ${({ theme }) => theme.bottom};
	border-radius: 2rem;
	padding: 0.6rem 1rem;
	display: flex;
	/* svg {
		font-size: 1.8rem;
	} */
`;

export const SearchIconContainer = styled.div``;

export const InputSearch = styled.input`
	background: transparent;
	width: 30vw;
	margin-left: 1rem;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.text};
`;

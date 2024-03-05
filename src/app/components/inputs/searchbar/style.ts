import styled from "styled-components";

export const SearchBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 500px;
	width: 100%;
`;

export const SearchInputContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 2rem;
	width: 100%;
	padding: 10px 10px 10px 20px;
`;

export const SearchInput = styled.input`
	background-color: transparent;
	/* width: 100%; */
	flex: 1;
	border: 0;
	outline: none;
	color: ${({ theme }) => theme.text};
`;

export const SearchButton = styled.button`
	width: 30px;
	height: 30px;
	border: 0;
	border-radius: 50%;
	background: ${({ theme }) => theme.secondColor};
`;

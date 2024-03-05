import styled from "styled-components";

export const Nav = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 999;
`;

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 0.7rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.container};
	border-radius: 0 0 2rem 2rem;
	border-bottom: 10px solid ${({ theme }) => theme.background};
	border-right: 10px solid ${({ theme }) => theme.background};
	border-left: 10px solid ${({ theme }) => theme.background};
`;

export const Log = styled.h2`
	color: ${({ theme }) => theme.text};
`;

export const OptionsIcons = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	svg {
		font-size: 2rem;
		color: ${({ theme }) => theme.text};
		cursor: pointer;
		transition: color 0.2s ease-in-out;
	}

	svg:hover {
		color: ${({ theme }) => theme.secondColor};
	}
`;

export const NumberContainer = styled.div`
	position: relative;
`;

export const CountNumber = styled.div`
	position: absolute;
	top: -5px;
	right: -8px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	cursor: pointer;
	background: ${({ theme }) => theme.secondColor};
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.textInverse};
	font-size: 0.7rem;
`;

// ===========================================
export const ContainerSideTop = styled.div`
	padding: 1rem;
	margin: 0 auto;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: sticky;
	top: 0;
	z-index: 999;

	@media only screen and (max-width: 999px) {
		display: none;
	}
`;

export const LeftSideTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	text-align: center;
`;

export const MidSideTop = styled.div``;

export const RightSideTop = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

export const Title = styled.h1`
	width: 100%;
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.text};
`;

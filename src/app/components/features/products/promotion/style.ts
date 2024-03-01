import styled from "styled-components";

export const Card = styled.article`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem 2rem;
	border-radius: 2rem;
	overflow: hidden;
	width: 300px;

	&:hover {
		box-shadow: 0 0.5rem 1rem black;
	}
`;

export const CardImage = styled.div`
	width: 180px;
	height: auto;
	margin-bottom: 0.5rem;
	cursor: pointer;
	/* padding: 1.5rem 0; */
`;

export const ProductImage = styled.img`
	max-width: 100%;
	height: auto;
`;

export const CardName = styled.div``;

export const ProductName = styled.p`
	font-weight: bold;
	margin-bottom: 0.25rem;
`;

export const CardPrecis = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	svg {
		font-size: 1.5rem;
		cursor: pointer;
	}
	svg:hover {
		opacity: 0.7;
	}
`;

export const PricesContainer = styled.div``;

export const PriceBefore = styled.span`
	display: block;
	text-align: center;
	font-size: 0.8rem;
	color: #ff5151;
	margin-bottom: 0.25rem;
`;

export const PriceAfter = styled.span`
	display: block;
	text-align: center;
	font-weight: bold;
`;

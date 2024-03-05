import styled from "styled-components";

export const SwiperContainer = styled.div`
	max-width: 75%;
	margin: 0 auto;
	& .swiperContainer {
		height: 47rem;
		position: relative;
	}

	& .swiper-slide {
		width: 37rem;
		height: 43rem;
		position: relative;
	}
`;

export const SliderController = styled.div`
	position: relative;
	bottom: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 105%;
`;

export const SwiperButtonPrev = styled.div`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	left: 42%;
	transform: translateX(-42%);
	cursor: pointer;
	/* filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1)); */

	svg {
		font-size: 2rem;
		/* color: #222224; */
	}

	&::after {
		content: "";
	}
`;

export const SwiperButtonNext = styled.div`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	left: 42%;
	transform: translateX(-42%);
	/* filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1)); */
	left: 58% !important;
	transform: translateX(-58%) !important;
	cursor: pointer;

	svg {
		font-size: 2rem;
		color: #222224;
	}

	&::after {
		content: "";
	}
`;

export const SwiperPagination = styled.div`
	position: relative;
	width: 15rem !important;
	bottom: 1rem;
`;

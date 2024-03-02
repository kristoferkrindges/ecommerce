import React from "react";

import { SectionContainer, ButtonsController, SwiperController } from "./style";
import SwipperSlider from "@/app/components/swiper";
import { PrimaryButton } from "@/app/styles/buttons/primaryButton.styled";

interface PromotionSectionProps {
	image: string;
}

export default function PromotionSection({ image }: PromotionSectionProps) {
	return (
		<SectionContainer>
			<ButtonsController>
				<PrimaryButton>Nike</PrimaryButton>
				<PrimaryButton>Adidas</PrimaryButton>
				<PrimaryButton>Pulma</PrimaryButton>
				<PrimaryButton>Fila</PrimaryButton>
				<PrimaryButton>Vans</PrimaryButton>
				<PrimaryButton>Bilabong</PrimaryButton>
			</ButtonsController>
			<SwiperController>
				<SwipperSlider image={""} />
			</SwiperController>
		</SectionContainer>
	);
}

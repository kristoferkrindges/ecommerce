import React from "react";

import { SectionContainer, ButtonsController, SwiperController } from "./style";
import SwipperSlider from "@/app/components/swiper";
import { PrimaryButton } from "@/app/styles/buttons/primaryButton.styled";
import Adidas from "../../../assets/images/adidas.png";
import Nike from "../../../assets/images/nike.png";
import { ProductType } from "@/app/types/ProductType";

export default function PromotionSection() {
	const products = [
		{
			id: 1,
			title: "Nike collection",
			price: 169.99,
			lowPrice: 99.99,
			description: "the new t-shirt nike",
			image: Nike.src,
			category: "shirts",
		},
		{
			id: 2,
			title: "Adidas collection",
			price: 139.99,
			lowPrice: 79.99,
			description: "the new t-shirt adidas",
			image: Adidas.src,
			category: "shirts",
		},
		{
			id: 3,
			title: "Nike collection",
			price: 169.99,
			lowPrice: 99.99,
			description: "the new t-shirt nike",
			image: Nike.src,
			category: "shirts",
		},
		{
			id: 4,
			title: "Nike collection",
			price: 169.99,
			lowPrice: 99.99,
			description: "the new t-shirt nike",
			image: Nike.src,
			category: "shirts",
		},
		{
			id: 5,
			title: "Adidas collection",
			price: 139.99,
			lowPrice: 79.99,
			description: "the new t-shirt adidas",
			image: Adidas.src,
			category: "shirts",
		},
	];
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
				<SwipperSlider products={products} />
			</SwiperController>
		</SectionContainer>
	);
}

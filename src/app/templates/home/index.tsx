import React from "react";

import {
	Card,
	CardImage,
	ProductImage,
	CardName,
	ProductName,
	CardPrecis,
	PricesContainer,
	PriceBefore,
	PriceAfter,
} from "./style";
import { CartIcon, FavIcon } from "@/app/icons/IO5";

interface PromotionCardProps {
	image: string;
	name: string;
	before: string | number;
	after: string | number;
}

export default function HomeTemplate({
	image,
	name,
	before,
	after,
}: PromotionCardProps) {
	return (
		<Card>
			<CardImage>
				<ProductImage src={image} />
			</CardImage>
			<CardName>
				<ProductName>{name}</ProductName>
			</CardName>
			<CardPrecis>
				<FavIcon />
				<PricesContainer>
					<PriceBefore>${before}</PriceBefore>
					<PriceAfter>${after}</PriceAfter>
				</PricesContainer>
				<CartIcon />
			</CardPrecis>
		</Card>
	);
}

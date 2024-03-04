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
import { ProductType } from "@/app/types/ProductType";

type ProductProps = {
	product: ProductType;
};

export default function PromotionCard({ product }: ProductProps) {
	return (
		<Card>
			<CardImage>
				<ProductImage src={product.image} />
			</CardImage>
			<CardName>
				<ProductName>{product.title}</ProductName>
			</CardName>
			<CardPrecis>
				{/* <FavIcon /> */}
				<PricesContainer>
					<PriceBefore>${product.price}</PriceBefore>
					<PriceAfter>${product.lowPrice}</PriceAfter>
				</PricesContainer>
				{/* <CartIcon /> */}
			</CardPrecis>
		</Card>
	);
}

"use client";

import { ProductType } from "@/app/types/ProductType";
import { ImageProduct } from "./style";
import { useState } from "react";

type ProductImageProps = {
	product: ProductType;
	fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
	const [loading, setLoading] = useState(false);
	return fill ? (
		<ImageProduct
			src={product.image}
			fill
			alt={product.title}
			style={loading ? { filter: "blur(0)" } : { filter: "blur(1.5rem)" }}
			onLoadingComplete={() => setLoading(true)}
		/>
	) : (
		<ImageProduct
			src={product.image}
			width={400}
			height={700}
			alt={product.title}
			style={loading ? { filter: "blur(0)" } : { filter: "blur(1.5rem)" }}
			onLoadingComplete={() => setLoading(true)}
		/>
	);
}

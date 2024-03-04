import React from "react";

import {
	SwiperContainer,
	SliderController,
	SwiperButtonPrev,
	SwiperButtonNext,
	SwiperPagination,
} from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import PromotionCard from "../features/products/promotion";
import { ArrowBack, ArrowForward } from "@/app/icons/IO5";
import { ProductType } from "@/app/types/ProductType";

export default function SwipperSlider({
	products,
}: {
	products: ProductType[];
}) {
	return (
		<SwiperContainer>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				loop={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 100,
					modifier: 2.5,
					slideShadows: false,
				}}
				pagination={{ el: ".swiperPagination", clickable: true }}
				navigation={{
					nextEl: ".swiperButtonNext",
					prevEl: ".swiperButtonPrev",
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className="swiperContainer"
			>
				{products.map((product: ProductType) => (
					<SwiperSlide key={product.id}>
						<PromotionCard product={product} />
					</SwiperSlide>
				))}
				<SliderController>
					<SwiperButtonPrev className="swiperButtonPrev">
						<ArrowBack />
					</SwiperButtonPrev>
					<SwiperButtonNext className="swiperButtonNext">
						<ArrowForward />
					</SwiperButtonNext>
					{/* <SwiperPagination className="swiperPagination"></SwiperPagination> */}
				</SliderController>
			</Swiper>
		</SwiperContainer>
	);
}

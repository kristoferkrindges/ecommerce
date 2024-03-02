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

import Adidas from "../../assets/images/adidas.png";
import Nike from "../../assets/images/nike.png";

interface SwipperSliderProps {
	image: string;
}

export default function SwipperSlider({ image }: SwipperSliderProps) {
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
				<SwiperSlide>
					<PromotionCard
						image={Nike.src}
						name={"Nike collection"}
						before={"159.00"}
						after={"99.99"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<PromotionCard
						image={Adidas.src}
						name={"Adidas collection"}
						before={"139.00"}
						after={"89.99"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<PromotionCard
						image={Nike.src}
						name={"Nike collection"}
						before={"159.00"}
						after={"99.99"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<PromotionCard
						image={Nike.src}
						name={"Nike collection"}
						before={"159.00"}
						after={"99.99"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<PromotionCard
						image={
							"https://images.tcdn.com.br/img/img_prod/1034143/camiseta_adidas_masculina_essentials_big_logo_hl2249_323_variacao_1471_1_35602522179b46ae5e1f082a37b5ed97.jpg"
						}
						name={"Nike collection"}
						before={"159.00"}
						after={"99.99"}
					/>
				</SwiperSlide>
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

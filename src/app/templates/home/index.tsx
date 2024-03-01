import React from "react";

import { MainContainer, SecondaryContainer } from "./style";
import PromotionSection from "./promotionSection";

interface HomeTemplateProps {
	image: string;
}

export default function HomeTemplate({}: HomeTemplateProps) {
	return (
		<MainContainer>
			<SecondaryContainer>
				<PromotionSection image={""} />
			</SecondaryContainer>
		</MainContainer>
	);
}

import React from "react";

import {
	ContainerSideTop,
	LeftSideTop,
	Title,
	MidSideTop,
	RightSideTop,
} from "./style";
import SearchBar from "../../inputs/searchbar";

export default function TopSideMenu() {
	return (
		<ContainerSideTop>
			<LeftSideTop>
				<Title>Ecommerce</Title>
			</LeftSideTop>
			<MidSideTop>
				<SearchBar />
			</MidSideTop>
			<RightSideTop></RightSideTop>
		</ContainerSideTop>
	);
}

import React from "react";

import {
	Nav,
	Container,
	Log,
	OptionsIcons,
	NumberContainer,
	CountNumber,
} from "./style";
import NewSearch from "../../inputs/newsearch";
import { CartIcon, FavIcon, MenuIcon } from "@/app/icons/IO5";

export default function TopSideMenu() {
	return (
		<Nav>
			<Container>
				<Log>MoreSale</Log>
				<NewSearch />
				<OptionsIcons>
					<FavIcon />
					<NumberContainer>
						<CountNumber>2</CountNumber>
						<CartIcon />
					</NumberContainer>
					<MenuIcon />
				</OptionsIcons>
			</Container>
		</Nav>
	);
}

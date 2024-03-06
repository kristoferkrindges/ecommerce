import React from "react";

import { Nav, Container, Log, OptionsIcons } from "./style";
import NewSearch from "../../inputs/newsearch";
import { MenuIcon } from "@/app/icons/IO5";
import SignedInButtons from "../../buttons/signedIn";

export default function TopSideMenu() {
	return (
		<Nav>
			<Container>
				<Log>MoreSale</Log>
				<NewSearch />
				<OptionsIcons>
					<SignedInButtons />
					<MenuIcon />
				</OptionsIcons>
			</Container>
		</Nav>
	);
}

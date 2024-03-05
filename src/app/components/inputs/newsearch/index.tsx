import React from "react";

import { SearchBarContainer, SearchIconContainer, InputSearch } from "./style";
import { SearchIcon } from "@/app/icons/IO5";

export default function NewSearch() {
	return (
		<SearchBarContainer>
			<SearchIconContainer>
				<SearchIcon />
			</SearchIconContainer>
			<InputSearch type="search" placeholder="Search for products" />
		</SearchBarContainer>
	);
}

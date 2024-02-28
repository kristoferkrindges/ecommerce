import { useState } from "react";

interface LanguageContextProps {
	language: string;
	handleFilter: (id?: string) => void;
}

export default function useLanguage() {
	const [language, setLanguage] = useState("Portuguese");

	const handleFilter = (id?: string) => {
		setLanguage((prevLanguage) =>
			prevLanguage === "Portuguese" ? "English" : "Portuguese"
		);
	};

	return {
		handleFilter,
		language,
	};
}

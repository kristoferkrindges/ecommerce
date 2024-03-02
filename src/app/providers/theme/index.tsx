"use client";
import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider as ThemeStyle } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { GlobalStyle } from "../../styles/global";
import { LanguageProvider } from "../../contexts/language";
import { DarkModeProvider } from "../../contexts/darkmode";
import HomeTemplate from "@/app/templates/home";
import TopSideMenu from "@/app/components/menus/topside";

interface ThemeContextProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	theme: string;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeProvider() {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		if (typeof window !== "undefined") {
			const local = localStorage.getItem("darkmode");
			if (local) {
				setTheme(local);
			}
		}
	}, []);
	const themeStyle = theme === "light" ? lightTheme : darkTheme;

	const contextValue: ThemeContextProps = { setTheme, theme };

	return (
		<ThemeContext.Provider value={contextValue}>
			<ThemeStyle theme={themeStyle}>
				<GlobalStyle />
				<LanguageProvider>
					<DarkModeProvider>
						<TopSideMenu />
						<HomeTemplate image={""} />
						{/* Routes */}
					</DarkModeProvider>
				</LanguageProvider>
			</ThemeStyle>
		</ThemeContext.Provider>
	);
}

import { MainContainer, SecondaryContainer } from "./style";
export default function InitialsTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<MainContainer>
			<SecondaryContainer>{children}</SecondaryContainer>
		</MainContainer>
	);
}

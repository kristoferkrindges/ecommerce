import { CartIcon, FavIcon } from "@/app/icons/IO5";
import { PrimaryButton } from "@/app/styles/buttons/primaryButton.styled";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { CountNumber, NumberContainer } from "./style";

export default function SignedInButtons() {
	return (
		<>
			<SignedOut>
				<SignInButton mode="modal">
					<PrimaryButton>Sign in</PrimaryButton>
				</SignInButton>
			</SignedOut>
			<SignedIn>
				<FavIcon />
				<NumberContainer>
					<CountNumber>2</CountNumber>
					<CartIcon />
				</NumberContainer>
				<UserButton />
			</SignedIn>
		</>
	);
}

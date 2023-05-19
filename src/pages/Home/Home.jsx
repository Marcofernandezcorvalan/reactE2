import React from "react";
import { styled } from "styled-components";

export const HeroContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	align-self: center;
`;

const Home = () => {
	return (
		<HeroContainer>
			<h1>E2 de React </h1>
		</HeroContainer>
	);
};

export default Home;

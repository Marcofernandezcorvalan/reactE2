import React from "react";
import { styled } from "styled-components";

export const ContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	/* margin: 0 auto; */
	padding: 15px;
	border-radius: 10px;
`;

export const TextContainerStyled = styled.div`
	text-align: center;

	& h2 {
		margin: 0;
		font-weight: 700;
		font-size: 35px;
		line-height: 36px;
	}

	& h3 {
		margin: 0;
		font-weight: 400;
		font-size: 18px;
		line-height: 22px;
		margin-top: 3px;
	}
`;

const Card = () => {
	return (
		<>
			<ContainerStyled>
				<img src="" alt="" />
				<TextContainerStyled>
					<h2></h2>
					<p></p>
				</TextContainerStyled>
			</ContainerStyled>
		</>
	);
};

export default Card;

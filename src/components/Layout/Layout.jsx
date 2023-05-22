import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

export const LayoutStyled = styled.div`
	margin: 0 auto;
	& p {
		text-align: center;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: calc(100vh - 120px);
	width: 100%;
`;

export const FooterStyled = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: x-small;
`;

const Layout = ({ children }) => {
	// const Contexto = useContext(Contexto);

	return (
		<LayoutStyled>
			<Navbar />
			<ContentContainer>{children}</ContentContainer>
			<FooterStyled>Proyecto numero dos de React.</FooterStyled>
		</LayoutStyled>
	);
};

export default Layout;

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
	height: calc(100vh - 120px);
`;

const Layout = ({ children }) => {
	return (
		<LayoutStyled>
			<Navbar />
			<ContentContainer>{children}</ContentContainer>
			<p>footer</p>
		</LayoutStyled>
	);
};

export default Layout;

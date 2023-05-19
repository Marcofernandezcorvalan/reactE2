import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarStyled = styled.header`
	display: flex;
	height: 50px;
	/* width: 100%; */
	background: #292929;
	justify-content: space-between;
	align-items: center;
	padding: 30px 50px;
`;

export const LinkContainer = styled.ul`
	display: flex;
	gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
	color: white;
	font-weight: 600;
	font-size: 15px;
	text-decoration: none;
	&.active {
		color: #ff4747;
	}
`;

export const ImgStyled = styled.img`
	height: 30px;
`;

const Navbar = () => {
	return (
		<NavbarStyled>
			<ImgStyled src="../../../public/LogoDefault.png" alt="Logo"></ImgStyled>
			{/* <img src="../../../public/LogoDefault.png" alt="logo" /> */}
			<LinkContainer>
				<NavLinkStyled to="/">Home</NavLinkStyled>
				<NavLinkStyled to="/todo">ToDo</NavLinkStyled>
				<NavLinkStyled to="/pokeapi">PokeApi</NavLinkStyled>
			</LinkContainer>
		</NavbarStyled>
	);
};

export default Navbar;

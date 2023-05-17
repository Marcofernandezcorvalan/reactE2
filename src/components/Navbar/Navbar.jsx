import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarStyled = styled.header`
	display: flex;
	height: 30px;
	background: #292929;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

export const LinkContainer = styled.ul`
	display: flex;
	gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
	color: white;
	font-weight: 600;
	font-size: 15px;
	&.active {
		color: #ff4747;
	}
`;

const Navbar = () => {
	return (
		<NavbarStyled>
			<img src="../../../public/vite.svg" alt="logo" />
			<LinkContainer>
				<NavLinkStyled to="/">Home</NavLinkStyled>
				<NavLinkStyled to="/todo">ToDo</NavLinkStyled>
				<NavLinkStyled to="/pokeapi">PokeApi</NavLinkStyled>
			</LinkContainer>
		</NavbarStyled>
	);
};

export default Navbar;

import React from "react";
import { InputStyled, TodoListStyled } from "../ToDo/Todo";
import Card from "./Card";

const Pokeapi = () => {
	return (
		<>
			<TodoListStyled style={{ flexDirection: "column" }}>
				<InputStyled placeholder="Ingrese su Pokemón"></InputStyled>
				<Card></Card>
			</TodoListStyled>
		</>
	);
};

export default Pokeapi;

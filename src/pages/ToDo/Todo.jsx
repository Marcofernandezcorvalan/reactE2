import React, { useState } from "react";
import { styled } from "styled-components";
import { Tarea } from "./Tarea";
// import { Tarea } from "./Tarea";

export const TodoListStyled = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	/* flex-direction: column; */
	gap: 40px;
	padding: 20px;
	background-color: #242424;
	align-self: center;
	border-radius: 10px;
`;

export const InputStyled = styled.input`
	background-color: black;
	width: 300px;
	height: 30px;
	color: white;
	font-family: "Poppins";
	font-size: 15px;
	border: none;
	border-radius: 5px;
	padding: 10px;
`;

export const ClickButtonStyled = styled.button`
	padding: 5px 10px;
	font-size: 13px;
	border-radius: 30px;
	border: none;
	font-weight: 600;
	color: limegreen;
	background: none;
	cursor: pointer;
`;

export const ContenedorTareas = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-weight: 600;
`;

export const ContenedorForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #242424;
	width: 50%;
	align-self: center;
	border-radius: 10px;
`;

const Todo = () => {
	const [tarea, setTarea] = useState("");
	const [listadoTareas, setListadoTareas] = useState([]);
	// const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (tarea === "") {
			alert("Ingrese una tarea por favor");
			return;
		}

		const nuevaTarea = {
			id: Math.random(),

			completado: false,
			tarea: tarea,
		};

		const temp = [...listadoTareas, nuevaTarea];
		setListadoTareas(temp);
		setTarea("");
		console.log(listadoTareas);
	};

	const handleChange = (e) => {
		setTarea(e.target.value);
	};

	// const isEmpty = (input) => {
	// 	if (tarea === "") return "Es obligatorio completar este Campo";
	// };

	const eliminar = () => {
		setListadoTareas([]);
	};

	return (
		<>
			<h1 style={{ alignSelf: "center", marginBottom: "100px" }}>ToDo List</h1>
			<ContenedorForm>
				<TodoListStyled onSubmit={handleSubmit}>
					<InputStyled
						type="text"
						name="name"
						value={tarea}
						onChange={handleChange}
						placeholder="ingrese su tarea"
					></InputStyled>
					<ClickButtonStyled onClick={handleSubmit}>Agregar</ClickButtonStyled>
				</TodoListStyled>
				<ClickButtonStyled style={{ color: "orange" }} onClick={eliminar}>
					Eliminar
				</ClickButtonStyled>
			</ContenedorForm>

			<ContenedorTareas>
				{listadoTareas.map((tarea) => {
					return (
						<Tarea key={tarea.id} tarea={tarea}>
							{tarea.tarea}
						</Tarea>
					);
				})}
			</ContenedorTareas>
		</>
	);
};

export default Todo;

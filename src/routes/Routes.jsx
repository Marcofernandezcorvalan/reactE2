import React from "react";
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Pokeapi from "../pages/Pokeapi/Pokeapi";
import Todo from "../pages/ToDo/Todo";

const Routes = () => {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<ReactDomRoutes>
						<Route path="/" element={<Home />} />
						<Route path="pokeapi" element={<Pokeapi />} />
						<Route path="todo" element={<Todo />} />
						<Route path="*" element={<Home />} />
					</ReactDomRoutes>
				</Layout>
			</BrowserRouter>
		</>
	);
};

export default Routes;

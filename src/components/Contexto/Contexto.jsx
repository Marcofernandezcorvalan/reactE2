import { createContext } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
	localStorage.getItem("tarea") || [];

	return <Contexto.Provider value={{ color: "crimson" }}>{children}</Contexto.Provider>;
};

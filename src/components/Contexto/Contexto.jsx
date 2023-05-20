import { createContext } from "react";

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
	return <Contexto.Provider value={{ color: "crimson" }}>{children}</Contexto.Provider>;
};

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./assets/GlobalStyles.js";
import { ContextoProvider } from "./components/Contexto/Contexto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextoProvider>
			<GlobalStyles />
			<App />
		</ContextoProvider>
	</React.StrictMode>
);

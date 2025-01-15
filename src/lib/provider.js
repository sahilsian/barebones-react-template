import ContextProvider from "./context_provider"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/routes";

const Provider = () => {
    return (
        // Passes Context to Application Routes
        <ContextProvider>
                <BrowserRouter>
                    <AppRoutes></AppRoutes>
                </BrowserRouter>
        </ContextProvider>
    );
}

export default Provider
import ContextProvider from "./context_provider"
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/routes";
import { ParallaxProvider } from 'react-scroll-parallax';


const Provider = () => {
    // Passes Context to Application Routes

    return (
        <ContextProvider>
            <ParallaxProvider>
                <BrowserRouter>
                    <AppRoutes></AppRoutes>
                </BrowserRouter>
            </ParallaxProvider>
        </ContextProvider>
    );
}

export default Provider
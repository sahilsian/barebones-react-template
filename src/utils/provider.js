import ContextProvider from "./context_provider"
import { ParallaxProvider } from 'react-scroll-parallax';


const Provider = ({children}) => {
    // Passes Context to Application Routes

    return (
        <ContextProvider>
            <ParallaxProvider>
                {children}
            </ParallaxProvider>
        </ContextProvider>
    );
}

export default Provider
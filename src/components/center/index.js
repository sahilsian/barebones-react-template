import { useContext } from "react"
import { Context } from "../../utils/context_provider"

const Center = ({children}) => {
    const {theme} = useContext(Context)
    return (
        <div>
            <div style={{maxWidth: theme.margins.pageMargin}} className="mx-auto">
                {children}
            </div>
        </div>
    )
}

export default Center
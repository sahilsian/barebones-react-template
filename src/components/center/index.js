import { useContext } from "react"
import { Context } from "../../utils/context_provider"

const Center = ({children}) => {
    const {theme} = useContext(Context)
    return (
        <div>
            <div style={{maxWidth: theme.margins.pageMargin}} className="mx-auto px-6">
                {children}
            </div>
        </div>
    )
}

export default Center
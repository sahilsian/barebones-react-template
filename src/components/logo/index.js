import Image from "../image"
import { Navigation_Config } from "../../utils/constants/recnroll"

const Logo = ({logo_src=Navigation_Config.navigation_logo, height="72px", width="72px"}) => {
    return (
        <div>
            <div >
                <Image rounded height={height} width={width} src={Navigation_Config.navigation_logo}></Image>
            </div>
        </div>
        
    )
}

export default Logo
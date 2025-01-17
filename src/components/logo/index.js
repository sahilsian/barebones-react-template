import Image from "../image"
import Logo_Img from "../../public/images/logo.png"

const Logo = ({logo_src=Logo_Img, height="72px", width="72px"}) => {
    return (
        <div>
            <div>
                <Image height={height} width={width} src={logo_src}></Image>
            </div>
        </div>
        
    )
}

export default Logo
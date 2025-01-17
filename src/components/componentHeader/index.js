import Logo from "../logo"
import TitleSubheading from "../titleSubheading"

const ComponentHeader = () => {
    return (
        <div>
            <div className="flex justify-between">
                {/* title */}
                <div>
                    <TitleSubheading></TitleSubheading>
                </div>
                {/* logo */}
                <div>
                    <Logo></Logo>
                </div>
            </div>
        </div>
    )
}

export default ComponentHeader

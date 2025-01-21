import Logo from "../logo"
import TitleSubheading from "../titleSubheading"

const ComponentHeader = ({title, subtitle}) => {
    return (
        <div>
            <div className="flex justify-between">
                {/* title */}
                <div className="max-w-[600px]">
                    <TitleSubheading title={title} subtitle={subtitle}></TitleSubheading>
                </div>
                {/* logo */}
                <div>
                    <Logo height="120px" width="120px"></Logo>
                </div>
            </div>
        </div>
    )
}

export default ComponentHeader

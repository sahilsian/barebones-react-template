import Logo from "../logo"
import TitleSubheading from "../titleSubheading"

const ComponentHeader = ({title, subtitle, logo}) => {
    return (
        <div>
            <div className="flex justify-between">
                {/* title */}
                <div className="max-w-[600px]">
                    <TitleSubheading title={title} subtitle={subtitle}></TitleSubheading>
                </div>
                {/* logo */}
                {logo && <div className="hidden md:block">
                    <Logo height="120px" width="120px"></Logo>
                </div>}
            </div>
        </div>
    )
}

export default ComponentHeader

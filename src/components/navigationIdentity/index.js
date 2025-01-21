import Logo from "../logo"
import Text from "../text"

const NavigationIdentity = ({heading="Rec N Roll", subheading="Campbellton, NB"}) => {
    return (
        <div className="flex gap-5">
            <div className="border-1px">
                <Logo></Logo>
            </div>
            <div>
                <Text color={"#FFFFFF"} level={"4"} text={heading}></Text>
                <Text color={"#FFFFFF"} level={"6"} text={subheading}></Text>
            </div>
        </div>
    )
}

export default NavigationIdentity
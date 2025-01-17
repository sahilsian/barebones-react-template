import Logo from "../logo"
import Text from "../text"

const NavigationIdentity = ({heading="Rec N Roll", subheading="Campbellton, NB"}) => {
    return (
        <div className="flex gap-5">
            <div>
                <Logo></Logo>
            </div>
            <div>
                <Text level={"2"} text={heading}></Text>
                <Text level={"4"} text={subheading}></Text>
            </div>
        </div>
    )
}

export default NavigationIdentity
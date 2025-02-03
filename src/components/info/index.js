import Text from "../text"

const Info = ({descriptor, heading, subheading, cta_text, cta_link}) => {
    return (
        <div>
            <div className="text-center md:text-start">
                <Text level={5} text={descriptor}></Text>
                <Text level={2} text={heading}></Text>
                <Text level={"p"} text={subheading}></Text>
            </div>
        </div>
    )
}

export default Info
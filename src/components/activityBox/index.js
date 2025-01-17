import Text from "../text"

const ActivityBox = ({src="https://placehold.co/600x400/EEE/31343C", heading="Heading", subheading="Subheading"}) => {
    return (
        <div>
            <img src={src}></img>
            <Text level={3} text={heading}></Text>
            <Text level={"p"} text={subheading}></Text>
        </div>
    )
}

export default ActivityBox
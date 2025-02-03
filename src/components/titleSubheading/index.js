import Text from "../text"

const TitleSubheading = ({title="Title", subtitle="Subtitle Lorem Ipsum"}) => {
    return (
        <div>
            <div className="text-center md:text-start">
                <Text level={2} text={title}></Text>
                <Text level={"p"} text={subtitle}></Text>
            </div>
        </div>
    )
}

export default TitleSubheading
import ImageText from "../imageText"

const FlexCol = ({arr, pagination=[0,3], hasDescription}) => {

    return (
        <div className="flex flex-wrap gap-4">
            {arr.slice(pagination[0], pagination[1]).map((item) => {
                return (
                    <div className="flex-1">
                    <ImageText hasDescription={hasDescription} source={item.source} title={item.title} description={item.description} alt={item.alt} shadow></ImageText>
                    </div>
                )
            })}
        </div>
    )
}

export default FlexCol
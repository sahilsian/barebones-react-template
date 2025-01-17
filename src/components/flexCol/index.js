import ImageText from "../imageText"

const FlexCol = ({arr, pagination=[0,3]}) => {

    return (
        <div className="flex flex-wrap gap-4">
            {arr.slice(pagination[0], pagination[1]).map((item) => {
                return (
                    <div className="flex-1">
                    <ImageText source={item.image} title={item.mame} description={item.description} alt={item.alt}></ImageText>
                    </div>
                )
            })}
        </div>
    )
}

export default FlexCol
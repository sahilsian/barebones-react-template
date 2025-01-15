import ImageText from "../imageText"

const FourCol = ({arr}) => {
    return (
        <div className="flex flex-wrap gap-4">
            {arr.slice(0, 4).map((item) => {
                return (
                    <div className="flex-1">
                    <ImageText source={item.image} title={item.mame} description={item.description} alt={item.alt}></ImageText>
                    </div>
                )
            })}
        </div>
    )
}

export default FourCol
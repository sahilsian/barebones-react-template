import Text from "../text"

const EventItem = ( { title, description, date, time, location, color } ) => {
    return (
        <div>
            <Text level={4} text={title} color={color}></Text>
            <div className="flex gap-3">
                <div className="flex gap-2">
                <Text level={6} bold text={"LOCATION:"} color={color}></Text>
                <Text level={6} text={location} color={color}></Text>
                </div>


                <Text level={6} text={"|"} color={color}></Text>

                <div className="flex gap-2">
                <Text level={6} text={"DATE:"} color={color}></Text>
                <Text level={6} text={date} color={color}></Text>
                </div>

                <Text level={6} text={"|"} color={color}></Text>

                <div className="flex gap-2">
                <Text level={6} text={"TIME:"} color={color}></Text>
                <Text level={6} text={time} color={color}></Text>
                </div>


            </div>
            <Text level={"p"} text={description} color={color + "90"}></Text>
        </div>
    )
}

export default EventItem
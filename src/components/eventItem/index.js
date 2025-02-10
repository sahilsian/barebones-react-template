import Spacer from "../spacer";
import Text from "../text";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const EventItem = ({ title, description, date, time, location, color, color_chevron, color_chevron_active = "#fff200", isActive, onToggle }) => {
    return (
        <div>
            <div className="flex w-full cursor-pointer" onClick={onToggle}>
            <div className="w-full">
                <Text level={4} text={title} color={color} />
                <div className="flex md:gap-3 md:flex-row flex-col">
                    <div className="flex md:gap-2 gap-0">
                        <Text level={6} bold text={"LOCATION:"} color={color} />
                        <Text level={6} text={location} color={color} />
                    </div>

                    <span className="md:block hidden">
                        <Text level={6} text={"|"} color={color} />
                    </span>

                    <div className="flex gap-2">
                        <Text level={6} bold text={"DATE:"} color={color} />
                        <Text level={6} text={date} color={color} />
                    </div>

                    <span className="md:block hidden">
                        <Text level={6} text={"|"} color={color} />
                    </span>

                    <div className="flex gap-2">
                        <Text level={6} bold text={"TIME:"} color={color} />
                        <Text level={6} text={time} color={color} />
                    </div>
                </div>
                
                <Spacer height="20px" />
                {isActive && (
                    <Text level={"p"} text={description} color={color} />
                )}

            </div>

            <div>
                {isActive ? (
                    <FaChevronUp size={20} color={color_chevron_active} />
                ) : (
                    <FaChevronDown size={20} color={color_chevron} />
                )}
            </div>
        </div>
        <Spacer height="10px" />
        <Spacer height="20px" />
        </div>
    );
};

export default EventItem;

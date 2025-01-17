import { useContext } from "react";
import { Context } from "../../lib/context_provider";
import Text from "../text";
import ActivitiesHighlight from "../activitiesHighlight";

const ActivityBar = ({heading="Activities", subheading="See the Family Fun at Rec N Roll"}) => {
    const { theme } = useContext(Context);
    return (
        <div style={{backgroundColor: theme.colors.color_ternary}} className="p-4">
            <div className="max-w-[1280px] mx-auto flex">
                <div className="flex-1 px-2 mt-5">
                    <Text level={2} text={heading}></Text>
                    <Text level={"p"} text={subheading}></Text>
                </div>
                <div className="flex-[2] px-2 relative">
                    <ActivitiesHighlight></ActivitiesHighlight>
                </div>
            </div>
        </div>
    )
}

export default ActivityBar
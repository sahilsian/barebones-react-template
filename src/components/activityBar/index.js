import { useContext } from "react";
import { Context } from "../../utils/context_provider";
import Text from "../text";
import ActivitiesHighlight from "../activitiesHighlight";
import Button from "../button";
import Spacer from "../spacer";
import { Highlight_Config } from "../../utils/constants/recnroll";

const ActivityBar = ({arr=Highlight_Config.highlight_arr, heading=Highlight_Config.highlight_heading, subheading=Highlight_Config.highlight_subheading, cta_label="See Events"}) => {
    const { theme } = useContext(Context);
    return (
        <div className="p-4 py-20 z-30  min-h-[320px]">
            <div className=" flex gap-[30px]">
                {/* <div className="flex-1 px-2 mt-5">
                    <Text level={2} text={heading}></Text>
                    <Text level={"4"} text={subheading}></Text>
                    <Spacer height="20px"></Spacer>
                    <div className="max-w-[200px]">
                        <Button status="secondary_inverted" label={cta_label}></Button>
                    </div>
                </div> */}
                <div className="flex-[3] px-2 relative">
                    <div className="top-[-70px] z-50">
                        <ActivitiesHighlight noText={true} arr={arr}></ActivitiesHighlight>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityBar
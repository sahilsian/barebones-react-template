import { useContext } from "react";
import { Context } from "../../lib/context_provider";
import Text from "../text";
import ActivitiesHighlight from "../activitiesHighlight";
import Button from "../button";
import Spacer from "../spacer";

const ActivityBar = ({arr=[], heading="Activities", subheading="See the Family Fun at Rec N Roll", cta_label="See More"}) => {
    const { theme } = useContext(Context);
    return (
        <div className="p-4 z-30 bg-[#fdf4dd] min-h-[320px]">
            <div className=" max-w-[1280px] mx-auto flex gap-[30px]">
                <div className="flex-1 px-2 mt-5">
                    <Text level={2} text={heading}></Text>
                    <Text level={"4"} text={subheading}></Text>
                    <Spacer height="20px"></Spacer>
                    <div className="max-w-[200px]">
                        <Button status="secondary_inverted" label={cta_label}></Button>
                    </div>
                </div>
                <div className="flex-[3] px-2 relative">
                    <div className="absolute top-[-70px] z-50">
                        <ActivitiesHighlight arr={arr}></ActivitiesHighlight>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityBar
import { Activities } from "../../constants/constants"
import ActivityBox from "../activityBox"

const ActivitiesHighlight = ({ theme }) => {
    return (
        <div className="md:mt-[-50px]">
            <div className="flex w-full gap-4">
                {Activities.map((activity) => {
                    return (
                        <div className="flex-1">
                            <ActivityBox src={activity.img} heading={activity.heading} subheading={activity.subheading}></ActivityBox>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default ActivitiesHighlight
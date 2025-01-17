import { Activities } from "../../constants/constants"
import FlexCol from "../flexCol"

const ActivitiesHighlight = ({ theme }) => {
    return (
        <div className="md:mt-[-50px]">
            <div className="flex w-full gap-4">
                <FlexCol arr={Activities} pagination={[0,3]}>
                </FlexCol>
            </div>

        </div>
    )
}

export default ActivitiesHighlight
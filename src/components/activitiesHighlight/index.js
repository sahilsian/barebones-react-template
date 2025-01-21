import { Activities } from "../../constants/constants"
import FlexCol from "../flexCol"

const ActivitiesHighlight = ({ theme, arr }) => {
    return (
        <div className="">
            <div className="flex w-full gap-4">
                <FlexCol hasDescription={false} arr={arr} pagination={[0,3]}>
                </FlexCol>
            </div>

        </div>
    )
}

export default ActivitiesHighlight
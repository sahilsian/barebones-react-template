import { Activities } from "../../utils/constants/recnroll"
import FlexCol from "../flexCol"

const ActivitiesHighlight = ({ theme, arr, noText }) => {
    return (
        <div className="">
            <div className="flex w-full gap-4">
                <FlexCol slider flexWrap noText={noText} hasDescription={false} arr={arr} pagination={[0,6]}>
                </FlexCol>
            </div>

        </div>
    )
}

export default ActivitiesHighlight
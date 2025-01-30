import { Activities } from "../../utils/constants/recnroll"
import FlexCol from "../flexCol"

const ActivitiesHighlight = ({ theme, arr, noText }) => {
    return (
        <div className="">
            <div className="flex w-full gap-4">
                <FlexCol noText={noText} hasDescription={false} arr={arr} pagination={[0,3]}>
                </FlexCol>
            </div>

        </div>
    )
}

export default ActivitiesHighlight
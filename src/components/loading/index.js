import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Spacer from "../spacer";
import Text from "../text";


const Loading = ({loading}) => {
    return (
        <div className="flex w-screen h-screen justify-center items-center flex-col">
            <ClipLoader
                color={"#1664AC"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <Spacer height="20px"></Spacer>
            <Text level={"1"} color={"primary"} text={"Dal Channel is Loading"}></Text>
        </div>
    )
}

export default Loading
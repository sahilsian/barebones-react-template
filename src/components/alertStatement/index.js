import Hyperlink from "../hyperlink";
import SocialRow from "../socialRow";
import Text from "../text";

const AlertStatement = ({theme, headline="Want to learn about our mission?", hyperlink_text="Read more about us on our blog.", hyperlink="https://google.com"}) => {
    return (
        <div className="w-full p-4">
            <div className="mx-auto max-w-[1280px] px-4">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Text color={"#FFF"} level={"6"} text={headline}></Text>
                        <Hyperlink hyperlink_text={hyperlink_text} hyperlink={hyperlink} theme={theme}><Text level={"6"} text={hyperlink_text} color={"#FFF"}></Text></Hyperlink>
                    </div>
                    <SocialRow></SocialRow>
                </div>
            </div>
        </div>
    )
}

export default AlertStatement;
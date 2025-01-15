import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";

const About = () => {
    return (
        <div>
            <Text level={"1"} text={"About"}></Text>
            <Text level={"5"} text={"Email me a picture of a bernese mountain dog"}></Text>
            <Text level={"5"} text={"sahilsiantech@gmail.com"}></Text>
        </div>
    )
}

export default About;
import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";
import Spacer from "../../../components/spacer";
import Image from "../../../components/image";
import Headshot from "../../../public/images/sahil.jpg"
import FourCol from "../../../components/fourCol";
import { art } from "../../../constants/constants";
import { ProductUI } from "../../../constants/constants";
const Home = () => {
    return (
        <div>
            <Image rounded src={Headshot}></Image>
            <Spacer height="10px"></Spacer>
            <Text level={"1"} text={"Hi, I'm Sahil."}></Text>
            <i><Text level={"p"} text={"I like to draw and code :P"}></Text> </i>
            <b><Text level={"p"} text={"Fullstack Developer, Award Winning Multidisciplinary Artist & Designer."}></Text> </b>
            <Spacer height="10px"></Spacer>
            <Spacer height="20px"></Spacer>
            <Text level={"2"} text={"Art & Design"}></Text>
            <FourCol arr={art}></FourCol>
            <Spacer height="40px"></Spacer>
            <Text level={"2"} text={"Product & UI"}></Text>
            <FourCol arr={ProductUI}></FourCol>
        </div>
    )
}

export default Home;
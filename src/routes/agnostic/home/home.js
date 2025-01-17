import { useNavigate } from "react-router-dom"
import Text from "../../../components/text";
import Spacer from "../../../components/spacer";
import Image from "../../../components/image";
import Headshot from "../../../public/images/sahil.jpg"
import Hero from "../../../components/hero";
import ActivityBar from "../../../components/activityBar";
import ComponentHeader from "../../../components/componentHeader";
import FlexCol from "../../../components/flexCol";
import Center from "../../../components/center";
import { Activities } from "../../../constants/constants";

const Home = () => {
    
    return (
        <div>
            <Spacer height="820px"></Spacer>
            <Hero></Hero>
            <div className=" bg-[#FFF]">
                <ActivityBar></ActivityBar>
                <Spacer height="40px"></Spacer>
                <Center>
                    <ComponentHeader></ComponentHeader>
                    <Spacer height="20px"></Spacer>
                    <FlexCol arr={Activities} pagination={[0,3]}></FlexCol>
                    <Spacer height="20px"></Spacer>
                    <FlexCol arr={Activities} pagination={[3,6]}></FlexCol>
                </Center>
                <Image rounded src={Headshot}></Image>
                <Spacer height="10px"></Spacer>
                <Text level={"1"} text={"Hi, I'm Sahil."}></Text>
                <i><Text level={"p"} text={"I like to draw and code :P"}></Text> </i>
                <b><Text level={"p"} text={"Fullstack Developer, Award Winning Multidisciplinary Artist & Designer."}></Text> </b>
                <Spacer height="10px"></Spacer>
                <Spacer height="20px"></Spacer>
                <Text level={"2"} text={"Art & Design"}></Text>
                <Spacer height="40px"></Spacer>
                <Text level={"2"} text={"Product & UI"}></Text>
            </div>

        </div>
    )
}

export default Home;
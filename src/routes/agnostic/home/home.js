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
import { Activities, Activities_Feature, Activities_Informational, Image_Text_Full_Row, Image_Text_Full_Row_Reverse } from "../../../utils/constants/recnroll";
import ImageTextFull from "../../../components/imageTextFull";
import Testimonials from "../../../components/testimonials/testimonials";

const Home = () => {
    
    return (
        <div>
            <Hero subheading={"Gather and Celebrate at Rec N Roll and enjoy our selection of activities. "} heading={"Everybody Needs a Little RnR..."}></Hero>
            <div className=" bg-[#FFF]">
                <ActivityBar arr={Activities_Feature}></ActivityBar>
                <Spacer height="40px"></Spacer>
                <Center>
                    <ComponentHeader subtitle={"Located in Campbellton, NB, RnR is Restigouche's only Family Entertainment Centre offering Bowling, Play Room, Billy's Bistro, Birthday Party Packages, etc. (arcade, mini golf, enhanced play area to come in 2025!) "} title={"Bowl ! Play ! Eat !"}></ComponentHeader>
                    <Spacer height="20px"></Spacer>
                    <FlexCol arr={Activities_Informational} pagination={[0,3]}></FlexCol>
                    <Spacer height="20px"></Spacer>
                    <FlexCol arr={Activities_Informational} pagination={[3,6]}></FlexCol>
                </Center>
                <Spacer height="100px"></Spacer>
                <ImageTextFull descriptor={Image_Text_Full_Row.descriptor} heading={Image_Text_Full_Row.heading} subheading={Image_Text_Full_Row.subheading} cta_link={Image_Text_Full_Row.cta_link} cta_text={Image_Text_Full_Row.cta_text} img_source={Image_Text_Full_Row.image_source}></ImageTextFull>
                <ImageTextFull reverse descriptor={Image_Text_Full_Row_Reverse.descriptor} heading={Image_Text_Full_Row_Reverse.heading} subheading={Image_Text_Full_Row_Reverse.subheading} cta_link={Image_Text_Full_Row_Reverse.cta_link} cta_text={Image_Text_Full_Row.cta_text} img_source={Image_Text_Full_Row_Reverse.image_source}></ImageTextFull>
                <Spacer height="100px"></Spacer>
                <Testimonials/>

            </div>

        </div>
    )
}

export default Home;
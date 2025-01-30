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
import { Activities, Activities_Feature, Activities_Informational, Image_Text_Full_Row, Image_Text_Full_Row_Reverse, tabs, Navigation_Config, Hero_Config, Highlight_Config } from "../../../utils/constants/recnroll";
import ImageTextFull from "../../../components/imageTextFull";
import Testimonials from "../../../components/testimonials/testimonials";
import Navigation from "../../../components/navigation";

const Home = () => {
    
    return (
        <div>
            <Navigation tabs={tabs} alert_headline={Navigation_Config.alert_headline} alert_hyperlink_text={Navigation_Config.alert_hyperlink_text} navigation_heading={Navigation_Config.navigation_heading} navigation_subheading={Navigation_Config.navigation_subheading}>
            </Navigation>
            <Hero 
            heading={Hero_Config.hero_heading} 
            subheading={Hero_Config.hero_subheading}
            heroImg={Hero_Config.hero_img} 
            heroVid={Hero_Config.hero_vid} 
            primary_button_text={Hero_Config.primary_button_text} 
            secondary_button_text={Hero_Config.secondary_button_text}>
            </Hero>
            <div className=" bg-[#FFF]">
                <ActivityBar arr={Highlight_Config.highlight_arr}heading={Highlight_Config.highlight_heading}  subheading={Highlight_Config.highlight_subheading}>
                </ActivityBar>
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
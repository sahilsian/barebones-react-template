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
import { Activities, Activities_Feature, Activities_Informational, Image_Text_Full_Row, Image_Text_Full_Row_Reverse, tabs, Navigation_Config, Hero_Config, Highlight_Config, Image_Text_Full_Location, Image_Text_Full_Activities, Featured_Activities, Featured_Faq, Faq_Items } from "../../../utils/constants/recnroll";
import ImageTextFull from "../../../components/imageTextFull";
import Testimonials from "../../../components/testimonials/testimonials";
import Navigation from "../../../components/navigation";
import FAQ from "../../../components/faq";

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
                
                <ImageTextFull right descriptor={Image_Text_Full_Activities.descriptor} heading={Image_Text_Full_Activities.heading} subheading={Image_Text_Full_Activities.subheading} cta_link={Image_Text_Full_Activities.cta_link} cta_text={Image_Text_Full_Activities.cta_text} img_source={Image_Text_Full_Activities.image_source}></ImageTextFull>
                <ImageTextFull left descriptor={Image_Text_Full_Location.descriptor} heading={Image_Text_Full_Location.heading} subheading={Image_Text_Full_Location.subheading} cta_link={Image_Text_Full_Location.cta_link} cta_text={Image_Text_Full_Location.cta_text} img_source={Image_Text_Full_Location.image_source}></ImageTextFull>
                <Spacer height="100px"></Spacer>
                <Center>
                    <ComponentHeader 
                    logo
                    title={Featured_Activities.title}
                    subtitle={Featured_Activities.subtitle}
                    ></ComponentHeader>
                    <Spacer height="40px"></Spacer>
                    <FlexCol arr={Activities_Informational} pagination={[0,3]}></FlexCol>
                    <Spacer height="20px"></Spacer>
                    <FlexCol arr={Activities_Informational} pagination={[3,6]}></FlexCol>
                    <Spacer height="100px"></Spacer>
                    <ComponentHeader 
                    title={Featured_Faq.title}
                    subtitle={Featured_Faq.subtitle}
                    ></ComponentHeader>
                    <FAQ arr={Faq_Items}></FAQ>
                </Center>
                <Spacer height="100px"></Spacer>
                <Spacer height="100px"></Spacer>
                <Testimonials/>

            </div>

        </div>
    )
}

export default Home;
import Spacer from "../src/components/spacer";
import Hero from "../src/components/hero";
import ComponentHeader from "../src/components/componentHeader";
import FlexCol from "../src/components/flexCol";
import Center from "../src/components/center";
import { Activities, Activities_Feature, Activities_Informational, Image_Text_Full_Row, Image_Text_Full_Row_Reverse, tabs, Navigation_Config, Hero_Config, Highlight_Config, Image_Text_Full_Location, Image_Text_Full_Activities, Featured_Activities, Featured_Faq, Faq_Items, Ongoing_Events } from "../src/utils/constants/recnroll";
import ImageTextFull from "../src/components/imageTextFull";
import Testimonials from "../src/components/testimonials/testimonials";
import Navigation from "../src/components/navigation";
import FAQ from "../src/components/faq";
import BlueBanner from "../src/components/blueBanner";
import EventItem from "../src/components/eventItem";
import Text from "../src/components/text";

export default function Home() {
    return (
        <div>
            <Navigation 
            tabs={tabs} 
            alert_headline={Navigation_Config.alert_headline} 
            alert_hyperlink_text={Navigation_Config.alert_hyperlink_text} navigation_heading={Navigation_Config.navigation_heading} navigation_subheading={Navigation_Config.navigation_subheading}>
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
                <BlueBanner>
                  <div>
                    <Text level={3} text={"During the Festival"} color={"#FFFFFF"}></Text>
                    <div className="w-full max-w-[100px] border-b-[1px] border-[#FFFFFF20]"></div>
                    <Spacer height="20px"></Spacer>

                    {Ongoing_Events.map((event) => {
                      return (
                        <EventItem key={event.title} color={"#FFFFFF"} title={event.title} description={event.description} date={event.date} time={event.time} location={event.location}>
                        </EventItem>
                      )
                    })}
                  </div>
                </BlueBanner>
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

import BlueBannerMini from "../src/components/blueBannerMini";
import Center from "../src/components/center";
import Footer from "../src/components/footer/footer";
import Navigation from "../src/components/navigation";
import Spacer from "../src/components/spacer";
import Text from "../src/components/text";
import { Navigation_Config, tabs } from "../src/utils/constants/recnroll";


export default function Sponsors() {
    return (
        <div>
            <Navigation
                tabs={tabs}
                alert_headline={Navigation_Config.alert_headline}
                alert_hyperlink_text={Navigation_Config.alert_hyperlink_text}
                navigation_heading={Navigation_Config.navigation_heading}
                navigation_subheading={Navigation_Config.navigation_subheading}
                cta_label={Navigation_Config.cta_label}
                cta_route_to={Navigation_Config.cta_route_to}
            >
            </Navigation>
            <BlueBannerMini
                title="Our Sponsors"
                description="Sno-Fest is made possible by the generous support of our incredible sponsors. Their contributions help bring this community event to life, allowing us to offer a memorable experience for all attendees. We are grateful for their commitment to making Sno-Fest a success and for their ongoing support of local events and initiatives."
            >
            </BlueBannerMini>
            <Spacer height="300px"></Spacer>
            <Center>
            <Text level={2} text={"Coming Soon"}></Text>
            </Center>
            <Spacer height="100px"></Spacer>
            <Footer></Footer>
        </div>
    )
}
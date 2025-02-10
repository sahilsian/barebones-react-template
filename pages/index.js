import Spacer from "../src/components/spacer";
import Hero from "../src/components/hero";
import ComponentHeader from "../src/components/componentHeader";
import FlexCol from "../src/components/flexCol";
import Center from "../src/components/center";
import { Activities, Activities_Feature, Activities_Informational, Image_Text_Full_Row, Image_Text_Full_Row_Reverse, tabs, Navigation_Config, Hero_Config, Highlight_Config, Image_Text_Full_Location, Image_Text_Full_Activities, Featured_Activities, Featured_Faq, Faq_Items, Ongoing_Events, Feb_8_Events, Feb_13_Events, Feb_14_Events, Feb_15_Events, Feb_16_Events, Feb_17_Events } from "../src/utils/constants/recnroll";
import ImageTextFull from "../src/components/imageTextFull";
import Testimonials from "../src/components/testimonials/testimonials";
import Navigation from "../src/components/navigation";
import FAQ from "../src/components/faq";
import BlueBanner from "../src/components/blueBanner";
import EventItem from "../src/components/eventItem";
import Text from "../src/components/text";
import { useState } from "react";
import Snowman from "../src/components/snowman";
import Footer from "../src/components/footer/footer";

export default function Home() {

  const [activeOngoingId, setActiveOngoingId] = useState(null);
  const [activeFeb8Id, setActiveFeb8Id] = useState(null);
  const [activeFeb13Id, setActiveFeb13Id] = useState(null);
  const [activeFeb14Id, setActiveFeb14Id] = useState(null);
  const [activeFeb15Id, setActiveFeb15Id] = useState(null);
  const [activeFeb16Id, setActiveFeb16Id] = useState(null);
  const [activeFeb17Id, setActiveFeb17Id] = useState(null);

  const handleToggleOngoing = (id) => {
    setActiveOngoingId(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb8 = (id) => {
    setActiveFeb8Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb13 = (id) => {
    setActiveFeb13Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb14 = (id) => {
    setActiveFeb14Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb15 = (id) => {
    setActiveFeb15Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb16 = (id) => {
    setActiveFeb16Id(prevId => (prevId === id ? null : id));
  };

  const handleToggleFeb17 = (id) => {
    setActiveFeb17Id(prevId => (prevId === id ? null : id));
  };

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

      <Hero
        heading={Hero_Config.hero_heading}
        subheading={Hero_Config.hero_subheading}
        heroImg={Hero_Config.hero_img}
        heroVid={Hero_Config.hero_vid}
        primary_button_text={Hero_Config.primary_button_text}
        primary_botton_href={Hero_Config.primary_button_href}
        secondary_button_text={Hero_Config.secondary_button_text}
        secondary_button_href={Hero_Config.secondary_button_href}
        >
        
      </Hero>

      <div className="">
        <ImageTextFull right descriptor={Image_Text_Full_Activities.descriptor} heading={Image_Text_Full_Activities.heading} subheading={Image_Text_Full_Activities.subheading} cta_link={Image_Text_Full_Activities.cta_link} cta_text={Image_Text_Full_Activities.cta_text} img_source={Image_Text_Full_Activities.image_source}></ImageTextFull>
        <ImageTextFull left descriptor={Image_Text_Full_Location.descriptor} heading={Image_Text_Full_Location.heading} subheading={Image_Text_Full_Location.subheading} cta_link={Image_Text_Full_Location.cta_link} cta_text={Image_Text_Full_Location.cta_text} img_source={Image_Text_Full_Location.image_source}></ImageTextFull>
        {/* ONGOING EVENTS */}
        <BlueBanner>
          <div>
            <Text level={3} text={"During the Festival"} color={"#FFFFFF"}></Text>
            <Spacer height="20px"></Spacer>

            {Ongoing_Events.map((event, id) => (
              <EventItem
                key={id}
                onToggle={() => handleToggleOngoing(id)}
                isActive={activeOngoingId === id}
                color={"#FFFFFF"}
                color_chevron={"#FFFFFF"}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
              />
            ))}

          </div>
        </BlueBanner>

        <Spacer height="100px"></Spacer>

        {/* FEBRUARY 8 EVENTS */}
        <Center>
          <div className="flex gap-6">
            <Text level={3} text={"February 8th"}></Text>
            <Text level={"3-light"} text={"Saturday Pre-Event"} color={"#23568D"}></Text>
          </div>
          <div className="w-full border-b-[1px] border-[#00000020]"></div>
          <Spacer height="20px"></Spacer>

          {Feb_8_Events.map((event, id) => (
            <EventItem
              key={id}
              onToggle={() => handleToggleFeb8(id)}
              isActive={activeFeb8Id === id}
              color={"#000000"}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}

          <div className="flex gap-6">
            <Text level={3} text={"February 13th"}></Text>
            <Text level={"3-light"} text={"Thursday"} color={"#23568D"}></Text>
          </div>
          <div className="w-full border-b-[1px] border-[#00000020]"></div>
          <Spacer height="20px"></Spacer>

          {Feb_13_Events.map((event, id) => (
            <EventItem
              key={id}
              onToggle={() => handleToggleFeb13(id)}
              isActive={activeFeb13Id === id}
              color={"#000000"}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}

          <div className="flex gap-6">
            <Text level={3} text={"February 14th"}></Text>
            <Text level={"3-light"} text={"Friday"} color={"#23568D"}></Text>
          </div>
          <div className="w-full border-b-[1px] border-[#00000020]"></div>
          <Spacer height="20px"></Spacer>

          {Feb_14_Events.map((event, id) => (
            <EventItem
              key={id}
              onToggle={() => handleToggleFeb14(id)}
              isActive={activeFeb14Id === id}
              color={"#000000"}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}

          <div className="flex gap-6">
            <Text level={3} text={"February 15th"}></Text>
            <Text level={"3-light"} text={"Saturday"} color={"#23568D"}></Text>
          </div>
          <div className="w-full border-b-[1px] border-[#00000020]"></div>
          <Spacer height="20px"></Spacer>

          {Feb_15_Events.map((event, id) => (
            <EventItem
              key={id}
              onToggle={() => handleToggleFeb15(id)}
              isActive={activeFeb15Id === id}
              color={"#000000"}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}

          <div className="flex gap-6">
            <Text level={3} text={"February 16th"}></Text>
            <Text level={"3-light"} text={"Sunday"} color={"#23568D"}></Text>
          </div>
          <div className="w-full border-b-[1px] border-[#00000020]"></div>
          <Spacer height="20px"></Spacer>

          {Feb_16_Events.map((event, id) => (
            <EventItem
              key={id}
              onToggle={() => handleToggleFeb16(id)}
              isActive={activeFeb16Id === id}
              color={"#000000"}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}

          <div className="flex gap-6">
            <Text level={3} text={"February 17th"}></Text>
            <Text level={"3-light"} text={"Monday"} color={"#23568D"}></Text>
          </div>
          <div className="w-full border-b-[1px] border-[#00000020]"></div>
          <Spacer height="20px"></Spacer>

          {Feb_17_Events.map((event, id) => (
            <EventItem
              key={id}
              onToggle={() => handleToggleFeb17(id)}
              isActive={activeFeb17Id === id}
              color={"#000000"}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
            />
          ))}

          <Snowman></Snowman>

          <div className="w-full max-w-[100px] border-b-[1px] border-[#FFFFFF20]"></div>
          <Spacer height="20px"></Spacer>

          {/* FEATURED ACTIVITIES */}
          <ComponentHeader
            logo
            title={Featured_Activities.title}
            subtitle={Featured_Activities.subtitle}
          />
          <Spacer height="40px"></Spacer>
          <FlexCol arr={Activities_Informational} pagination={[0, 3]} />
          <Spacer height="20px"></Spacer>
          <FlexCol arr={Activities_Informational} pagination={[3, 6]} />

          <Spacer height="100px"></Spacer>

          {/* FAQ */}
          <ComponentHeader
            title={Featured_Faq.title}
            subtitle={Featured_Faq.subtitle}
          />
          <Spacer height="20px"></Spacer>

          <FAQ arr={Faq_Items} />
        </Center>

        <Spacer height="100px"></Spacer>
        <Spacer height="100px"></Spacer>
        
        <Footer ></Footer>
      </div>
    </div>
  );
}

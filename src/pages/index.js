import Spacer from "../components/spacer";
import Hero from "../components/hero";
import ComponentHeader from "../components/componentHeader";
import FlexCol from "../components/flexCol";
import Center from "../components/center";
import { Activities, Activities_Feature, Activities_Informational, Image_Text_Full_Row, Image_Text_Full_Row_Reverse, tabs, Navigation_Config, Hero_Config, Highlight_Config, Image_Text_Full_Location, Image_Text_Full_Activities, Featured_Activities, Featured_Faq, Faq_Items, Ongoing_Events, Feb_8_Events, Feb_13_Events, Feb_14_Events, Feb_15_Events, Feb_16_Events, Feb_17_Events, Image_Text_Full_Activities_FR, Image_Text_Full_Location_FR, Ongoing_Events_FR, Feb_8_Events_FR, Feb_13_Events_FR, Feb_14_Events_FR, Feb_15_Events_FR, Feb_16_Events_FR, Feb_17_Events_FR, Featured_Activities_FR, Activities_Informational_FR, Featured_Faq_FR, Faq_Items_FR, Hero_Config_FR, Navigation_Config_FR } from "../utils/constants/recnroll";
import ImageTextFull from "../components/imageTextFull";
import Testimonials from "../components/testimonials/testimonials";
import Navigation from "../components/navigation";
import FAQ from "../components/faq";
import BlueBanner from "../components/blueBanner";
import EventItem from "../components/eventItem";
import Text from "../components/text";
import { useContext, useState } from "react";
import Snowman from "../components/snowman";
import Footer from "../components/footer/footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { Context } from "../utils/context_provider";

export default function Home() {

  const { language } = useContext(Context)

  const router = useRouter()

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
      <Head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <title>Sno-Fest | Campbelltons Winter Festival</title>
        <meta name='description' content="Campbelltons New Brunswick annual Snow Fest is the most anticipated winter celebration with activities, music, food and fun."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        <meta property="og:url" content={`${router.asPath}`}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content={"Sno-Fest Home"}></meta>
        <meta content="Sno-Fest" property="og:site_name"></meta>
        <meta property="og:description" content={"Campbelltons New Brunswick annual Snow Fest is the most anticipated winter celebration with activities, music, food and fun."}
        ></meta>
        <meta name="theme-color" content="#23568D"></meta>
        <meta property="og:image" content={"/images/opengraph-default.png"}></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:domain" content="snofest.ca"></meta>
        <meta property="twitter:url" content={`${router.asPath}`}></meta>
        <meta name="twitter:title" content="Campbelltons New Brunswick annual Snow Fest is the most anticipated winter celebration with activities, music, food and fun."></meta>
        <meta name="twitter:description" content={"Campbelltons New Brunswick annual Snow Fest is the most anticipated winter celebration with activities, music, food and fun."}></meta>
        <meta name="twitter:image" content={"/images/opengraph-default.png"}></meta>
      </Head>
      {!language || language == "EN" ?
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
        :
        <Navigation
          tabs={tabs}
          alert_headline={Navigation_Config_FR.alert_headline}
          alert_hyperlink_text={Navigation_Config_FR.alert_hyperlink_text}
          navigation_heading={Navigation_Config_FR.navigation_heading}
          navigation_subheading={Navigation_Config_FR.navigation_subheading}
          cta_label={Navigation_Config_FR.cta_label}
          cta_route_to={Navigation_Config_FR.cta_route_to}
        >
        </Navigation>
      }

      {!language || language == "EN" ?
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
        :
        <Hero
          heading={Hero_Config_FR.hero_heading}
          subheading={Hero_Config_FR.hero_subheading}
          heroImg={Hero_Config_FR.hero_img}
          heroVid={Hero_Config_FR.hero_vid}
          primary_button_text={Hero_Config_FR.primary_button_text}
          primary_botton_href={Hero_Config_FR.primary_button_href}
          secondary_button_text={Hero_Config_FR.secondary_button_text}
          secondary_button_href={Hero_Config_FR.secondary_button_href}
        >

        </Hero>
      }



      <div className="">

        {!language || language == "EN" ?
          <ImageTextFull right descriptor={Image_Text_Full_Activities.descriptor} heading={Image_Text_Full_Activities.heading} subheading={Image_Text_Full_Activities.subheading} cta_link={Image_Text_Full_Activities.cta_link} cta_text={Image_Text_Full_Activities.cta_text} img_source={Image_Text_Full_Activities.image_source}></ImageTextFull>
          :
          <ImageTextFull right descriptor={Image_Text_Full_Activities_FR.descriptor} heading={Image_Text_Full_Activities_FR.heading} subheading={Image_Text_Full_Activities_FR.subheading} cta_link={Image_Text_Full_Activities_FR.cta_link} cta_text={Image_Text_Full_Activities_FR.cta_text} img_source={Image_Text_Full_Activities_FR.image_source}></ImageTextFull>
        }

        {!language || language == "EN" ?
          <ImageTextFull left descriptor={Image_Text_Full_Location.descriptor} heading={Image_Text_Full_Location.heading} subheading={Image_Text_Full_Location.subheading} cta_link={Image_Text_Full_Location.cta_link} cta_text={Image_Text_Full_Location.cta_text} img_source={Image_Text_Full_Location.image_source}></ImageTextFull>
          :
          <ImageTextFull left descriptor={Image_Text_Full_Location_FR.descriptor} heading={Image_Text_Full_Location_FR.heading} subheading={Image_Text_Full_Location_FR.subheading} cta_link={Image_Text_Full_Location_FR.cta_link} cta_text={Image_Text_Full_Location_FR.cta_text} img_source={Image_Text_Full_Location_FR.image_source}></ImageTextFull>
        }

        {!language || language == "EN" ?
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
          :
          <BlueBanner>
            <div>
              <Text level={3} text={"Pendant le Festival"} color={"#FFFFFF"}></Text>
              <Spacer height="20px"></Spacer>

              {Ongoing_Events_FR.map((event, id) => (
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
        }

        <Spacer height="100px"></Spacer>

        {!language || language == "EN" ?
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
          :
          <Center>
            <div className="flex gap-6">
              <Text level={3} text={"8 Février"}></Text>
              <Text level={"3-light"} text={"Événement Préliminaire du Samedi"} color={"#23568D"}></Text>

            </div>
            <div className="w-full border-b-[1px] border-[#00000020]"></div>
            <Spacer height="20px"></Spacer>

            {Feb_8_Events_FR.map((event, id) => (
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
              <Text level={3} text={"13 Février"}></Text>
              <Text level={"3-light"} text={"Jeudi"} color={"#23568D"}></Text>
            </div>

            <div className="w-full border-b-[1px] border-[#00000020]"></div>
            <Spacer height="20px"></Spacer>

            {Feb_13_Events_FR.map((event, id) => (
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
              <Text level={3} text={"14 Février"}></Text>
              <Text level={"3-light"} text={"Vendredi"} color={"#23568D"}></Text>
            </div>

            <div className="w-full border-b-[1px] border-[#00000020]"></div>
            <Spacer height="20px"></Spacer>

            {Feb_14_Events_FR.map((event, id) => (
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
              <Text level={3} text={"15 Février"}></Text>
              <Text level={"3-light"} text={"Samedi"} color={"#23568D"}></Text>
            </div>

            <div className="w-full border-b-[1px] border-[#00000020]"></div>
            <Spacer height="20px"></Spacer>

            {Feb_15_Events_FR.map((event, id) => (
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
              <Text level={3} text={"16 Février"}></Text>
              <Text level={"3-light"} text={"Dimanche"} color={"#23568D"}></Text>
            </div>

            <div className="w-full border-b-[1px] border-[#00000020]"></div>
            <Spacer height="20px"></Spacer>

            {Feb_16_Events_FR.map((event, id) => (
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
              <Text level={3} text={"17 Février"}></Text>
              <Text level={"3-light"} text={"Lundi"} color={"#23568D"}></Text>
            </div>

            <div className="w-full border-b-[1px] border-[#00000020]"></div>
            <Spacer height="20px"></Spacer>

            {Feb_17_Events_FR.map((event, id) => (
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
              title={Featured_Activities_FR.title}
              subtitle={Featured_Activities_FR.subtitle}
            />
            <Spacer height="40px"></Spacer>
            <FlexCol arr={Activities_Informational_FR} pagination={[0, 3]} />
            <Spacer height="20px"></Spacer>
            <FlexCol arr={Activities_Informational_FR} pagination={[3, 6]} />

            <Spacer height="100px"></Spacer>

            {/* FAQ */}
            <ComponentHeader
              title={Featured_Faq_FR.title}
              subtitle={Featured_Faq_FR.subtitle}
            />
            <Spacer height="20px"></Spacer>

            <FAQ arr={Faq_Items_FR} />
          </Center>
        }
        <Spacer height="100px"></Spacer>
        <Spacer height="100px"></Spacer>

        <Footer ></Footer>
      </div>
    </div>
  );
}

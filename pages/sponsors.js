import Head from "next/head";
import BlueBannerMini from "../src/components/blueBannerMini";
import Center from "../src/components/center";
import Footer from "../src/components/footer/footer";
import Navigation from "../src/components/navigation";
import Spacer from "../src/components/spacer";
import Text from "../src/components/text";
import { Navigation_Config, tabs } from "../src/utils/constants/recnroll";
import { useRouter } from "next/router";


export default function Sponsors() {

    const router = useRouter()

    return (
        <div>
            <Head>
                <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                    <title>Sponsors | Campbellton Sno-Fest</title>
                    <meta name='description' content="Campbelltons New Brunswick annual Snow Fest is the most anticipated winter celebration with activities, music, food and fun."></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
                    <link
                    rel="stylesheet"
                    type="text/css"
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                    />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-
                        awesome.min.css" rel="stylesheet" integrity="sha384-
                        wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                    crossorigin="anonymous"></link>
                    <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                    />
                     <meta property="og:url" content={`${router.asPath}`}></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta property="og:title" content={"Events"}></meta>
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
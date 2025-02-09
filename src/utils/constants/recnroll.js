import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Home from "../../../pages/index";
import Birthday from "../../../public/images/birthday.jpg"
import Golf from "../../../public/images/golf.jpg"
import Bowling_Full from "../../../public/images/bowling_full.jpg"
import Fish from "../../../public/images/fish.jpg"
import Sno_Fest_Logo from "../../../public/images/sno_fest_logo.jpg"
import Sno_Fest_Hero from "../../../public/images/sno_fest_hero.jpg"

export const config = {
    navigation: {
        id: "navigation",
        props: {},
        blocks: [
            {
                alert_statement: {
                    id: "",
                    props: {},
                    blocks: [

                    ]
                }
            },
            {
                navigation_header: {
                    id: "",
                    props: {},
                    blocks: [
                        
                    ]
                }
            },
            {

            }
        ]
    }
}

export const tabs = [
    {
        name: "Home",
        route: "/",
    }
]

export const themes = [
    {
        name: "Default",
        background: "#FFFFFF",
        text: "#000000",
        bordercolor: "#ECF0F9",
        margins: {
            pageMargin: "1280px"
        },
        colors: {
            color_main: "#FFFFFF",
            color_secondary: "#FDF4DD",
            color_ternary: "#6eb2b5",
            hyperlink: "#478865"
        }
    }
];

export const Navigation_Config = {
    alert_headline: "For more information, call us at:",
    alert_hyperlink_text: "+1 888-413-4433",
    navigation_heading: "Campbellton Snofest",
    navigation_subheading: "Campbellton, NB",
    navigation_logo: Sno_Fest_Logo
}

export const Hero_Config = {
    hero_heading: "Enjoy the Winter Magic",
    hero_subheading: "Come join us February 13th - 17th for the annual Campbellton Snofest.",
    hero_img: "https://i.imgur.com/08wAnpN.jpeg",
    hero_vid: null,
    primary_button_text: "See our Schedule",
    primary_button_href: "https://google.com",
    secondary_button_text: "Signup",
    secondary_button_href: "https://google.com"
}



export const Highlight_Config = {
    highlight_heading: "Annual Fun",
    highlight_subheading: "February 13th - 17th",
    highlight_arr: [
        {
            title: "Snofest Team",
            description: "",
            source: "https://i.imgur.com/08wAnpN.jpeg"
        },
        {
            title: "Snofest Village",
            description: "",
            source: "https://i.imgur.com/KYzesVf.jpeg"
        },
        {
            title: "Snofest Activity",
            description: "",
            source: "https://i.imgur.com/GbBi3Yn.jpeg"
        },
        {
            title: "Elephant Snowman",
            description: "",
            source: "https://i.imgur.com/sE6sz2l.jpeg"
        },
        {
            title: "Spongebob Snowman",
            description: "",
            source: "https://i.imgur.com/R6HvFex.jpeg"
        }
    ]
}

export const Image_Text_Full_Location = {
    descriptor: "LOTS OF FAMILY FUN",
    heading: "Campbellton's regional winter celebration",
    subheading: "Campbellton's regional winter celebration has a full week of fun in store for the whole family. Take in the entertainment at the Sno-Fest Village at Sugarloaf Provincial Park, find snow sculptures all over town, take part in special activities at the museum, library and art gallery, enjoy sleigh rides, tube sliding, skating, games, concerts and so much more. Don't miss the Family Day events!",
    image_source: "https://i.imgur.com/oXMRY6E.jpeg",
    cta_text: "Read More about Us",
    cta_link: "https://google.com"
}

export const Image_Text_Full_Activities = {
    descriptor: "LOTS OF FAMILY FUN",
    heading: "Campbellton's regional winter celebration",
    subheading: "Campbellton's regional winter celebration has a full week of fun in store for the whole family. Take in the entertainment at the Sno-Fest Village at Sugarloaf Provincial Park, find snow sculptures all over town, take part in special activities at the museum, library and art gallery, enjoy sleigh rides, tube sliding, skating, games, concerts and so much more. Don't miss the Family Day events!",
    image_source: "https://i.imgur.com/J3XPizf.jpeg",
    cta_text: "Read More about Us",
    cta_link: "https://google.com"
}

export const Activities_Informational = [
    {
        title: "Snofest Village",
        description: "Snofest village text will go here.",
        source: "https://i.imgur.com/yH4A5vR.jpeg"
    },
    {
        title: "Mini Putt",
        description: "Mini Putt text goes here",
        source: "https://i.imgur.com/DSUtfuq.jpeg"
    },
    {
        title: "Various Kids Activities",
        description: "Various kids activities goes here",
        source: "https://i.imgur.com/4tyuMob.jpeg"
    },
    {
        title: "Live Music",
        description: "Live Music text goes here",
        source: "https://i.imgur.com/UMEwADn.jpeg"
    },
    {
        title: "Arts and Crafts",
        description: "Arts and Crafts text goes here",
        source: "https://i.imgur.com/8Z4RPvl.jpeg"
    },
    {
        title: "Skiing",
        description: "Skiing text goes here",
        source: "https://i.imgur.com/ZsoxEfL.jpeg"
    }
]

export const Featured_Activities = {
    title: "Celebrate Winter", 
    subtitle: "At the Campbellton Sno-Fest, visitors can also enjoy live music, food vendors, and other entertainment throughout the festival. With its family-friendly atmosphere and activities, it's a must for anyone looking to embrace the cold and snowy weather in Restigouche."
}

export const Faq_Items = [
    {
        question: "Frequently Asked Question 1",
        answer: "Answer to Question"
    },
    {
        question: "Frequently Asked Question 2",
        answer: "Answer to Question"
    },
    {
        question: "Frequently Asked Question 3",
        answer: "Answer to Question"
    },
    {
        question: "Frequently Asked Question 4",
        answer: "Answer to Question"
    },
    {
        question: "Frequently Asked Question 5",
        answer: "Answer to Question"
    }
]

export const Featured_Faq = {
    title: "Frequently Asked Questions", 
    subtitle: "Have any questions? See our frequently asked questions or reach out to us!"
}


export const Socials = [
    {
        name: "https://instagram.com/",
        icon: <FaInstagram color={'#FFFFFF'} size={16}></FaInstagram>
    },
    {
        name: "https://facebook.com/",
        icon: <FaFacebook color={'#FFFFFF'} size={16}></FaFacebook>
    },
    {
        name: "https://youtube.com/",
        icon: <FaYoutube color={'#FFFFFF'} size={16}></FaYoutube>
    },
    {
        name: "https://tiktok.com/",
        icon: <FaTiktok color={'#FFFFFF'} size={16}></FaTiktok>
    }
]

export const Activities_Feature = [
    {
        title: "Indoor Play Room",
        description: "Arcade Text Here",
        source: "https://img1.wsimg.com/isteam/ip/a1d5a11b-870a-4049-9f15-3ea947340f77/IMG_2286.jpeg/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
    },
    {
        title: "Arcade",
        description: "Arcade Text Here",
        source: "https://img1.wsimg.com/isteam/ip/a1d5a11b-870a-4049-9f15-3ea947340f77/blob-04d8ea3.png/:/cr=t:0%25,l:10.74%25,w:78.52%25,h:100%25/rs=w:365,h:365,cg:true"
    },
    {
        title: "Bowling",
        description: "Arcade Text Here",
        source: "https://img1.wsimg.com/isteam/ip/a1d5a11b-870a-4049-9f15-3ea947340f77/IMG_6314.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:365,h:365,cg:true"
    }
]

export const Image_Text_Full_Row = {
    descriptor: "ENJOY A LITTLE RNR",
    heading: "Restigouche's only Family Entertainment Centre",
    subheading: "Located in the heart of Campbellton, New Brunswick, RnR is Restigouche's premier and only Family Entertainment Centre, designed to provide fun and excitement for visitors of all ages. Our center features a range of engaging activities, including bowling lanes, a dedicated playroom for kids, and Billy's Bistro, where you can enjoy delicious meals and snacks. We also specialize in creating memorable celebrations with our Birthday Party Packages, perfect for making your special day stress-free and unforgettable.",
    image_source: Bowling_Full,
    cta_text: "Read More about Us",
    cta_link: "https://google.com"
}

export const Image_Text_Full_Row_Reverse = {
    descriptor: "RECLINE AND RELAX",
    heading: "Bringing the Campbellton Community Together",
    subheading: "At the heart of Campbellton, RnR is more than just an entertainment center – it's a hub for connection, laughter, and shared experiences. From friendly bowling matches to kids exploring our playroom, and families enjoying delicious meals at Billy's Bistro, we’re proud to provide a space where the community comes together to make memories that last a lifetime.",
    image_source: Fish,
    cta_text: "Read More about Us",
    cta_link: "https://google.com"
}


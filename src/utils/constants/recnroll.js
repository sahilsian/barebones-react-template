import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Home from "../../../pages/index";
import Birthday from "../../../public/images/birthday.jpg"
import Golf from "../../../public/images/golf.jpg"
import Bowling_Full from "../../../public/images/bowling_full.jpg"
import Fish from "../../../public/images/fish.jpg"
import Sno_Fest_Logo from "../../../public/images/sno_fest_logo.png"
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
            pageMargin: 1280
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
    navigation_logo: {
        src: Sno_Fest_Logo,
        width: 75,
        height: 75,
        alt: "Logo for SnoFest"
    }
}

export const Hero_Config = {
    hero_heading: "Enjoy the Winter Magic",
    hero_subheading: "Come join us February 13th - 17th for the annual Campbellton Snofest.",
    hero_img: {
        src: "https://i.imgur.com/08wAnpN.jpeg",
        width: 3000,
        height: 2250,
        alt: "Hero image for snofest website of skiers on top of mountain"
    },
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
            source: {
                src: "https://i.imgur.com/08wAnpN.jpeg",
                width: 3000,
                height: 2250,
                alt: "Hero image for snofest website of skiers on top of mountain"
            }
        },
        {
            title: "Snofest Village",
            description: "",
            source: {
                src: "https://i.imgur.com/KYzesVf.jpeg",
                width: 1536,
                height: 1534,
                alt: "Image of snofest snoman mascot"
            } 
        },
        {
            title: "Snofest Activity",
            description: "",
            source: {
                src: "https://i.imgur.com/GbBi3Yn.jpeg",
                width: 4000,
                height: 3000,
                alt: "Image of snow man crafts"
            } 
        },
        {
            title: "Elephant Snowman",
            description: "",
            source: {
                src: "https://i.imgur.com/sE6sz2l.jpeg",
                width: 1504,
                height: 1505,
                alt: "Image of elephant snow man"
            } 
        },
        {
            title: "Spongebob Snowman",
            description: "",
            source: {
                src: "https://i.imgur.com/R6HvFex.jpeg",
                width: 3000,
                height: 2420,
                alt: "large spongebob snow man"
            } 
        }
    ]
}

export const Image_Text_Full_Location = {
    descriptor: "LOTS OF FAMILY FUN",
    heading: "Campbellton's regional winter celebration",
    subheading: "Campbellton's regional winter celebration has a full week of fun in store for the whole family. Take in the entertainment at the Sno-Fest Village at Sugarloaf Provincial Park, find snow sculptures all over town, take part in special activities at the museum, library and art gallery, enjoy sleigh rides, tube sliding, skating, games, concerts and so much more. Don't miss the Family Day events!",
    image_source: {
        src: "https://i.imgur.com/oXMRY6E.jpeg",
        width: 4000,
        height: 3000,
        alt: "Sno Fest village"
    },
    cta_text: "Read More about Us",
    cta_link: "https://google.com"
}

export const Image_Text_Full_Activities = {
    descriptor: "LOTS OF FAMILY FUN",
    heading: "Campbellton's regional winter celebration",
    subheading: "Campbellton's regional winter celebration has a full week of fun in store for the whole family. Take in the entertainment at the Sno-Fest Village at Sugarloaf Provincial Park, find snow sculptures all over town, take part in special activities at the museum, library and art gallery, enjoy sleigh rides, tube sliding, skating, games, concerts and so much more. Don't miss the Family Day events!",
    image_source: {
        src: "https://i.imgur.com/J3XPizf.jpeg",
        width: 3000,
        height: 2625,
        alt: "Kids creating crafts in Sno Fest village"
    },
    cta_text: "Read More about Us",
    cta_link: "https://google.com"
}

export const Ongoing_Events = [
    {
        title: "Evening Illuminated Path",
        description: "Take a magical stroll through a beautifully lit winter pathway, where the snow sparkles under glowing lights, creating an unforgettable winter ambiance.",
        date: "All Throughout the Festival",
        time: "All Day",
        location: "Sugarloaf Provincial Park Campsite"
    
    },
    {
        title: 'Exhibit: "Winter 2025" by Local Member Artists',
        description: "Explore a stunning collection of winter-inspired artworks by talented local member artists. Celebrate the beauty of the season through painting, photography, and mixed media pieces.",
        date: "February 13th - 15th",
        time: "10:00 AM - 4:00 PM",
        location: "Restigouche Gallery"
    },
    {
        title: 'Boutique: Arts & Products',
        description: "Support local artists and artisans by browsing a unique selection of handmade crafts, paintings, jewelry, and winter-themed souvenirs.",
        date: "February 13th - 15th",
        time: "10:00 AM - 4:00 PM",
        location: "Restigouche Gallery"
    },
    {
        title: "Dive into a World of Reading, with an Icy Twist",
        description: "When you borrow a book, you leave with a coupon for a free Blizzard from Dairy Queen! Offer valid per person. while quantities last.",
        date: "February 13th - 15th",
        time: "10:00 AM - 4:00 PM",
        location: "Raymond Lagacé Public Library"
    },
    {
        title: "Fill Out a Ballot",
        description: "Fill out a ballot at the Sno-Fest Village mini putt station for a chance to win a basekt of activities.",
        date: "All Throughout the Festival",
        time: "All Day",
        location: "Sugarloaf Provincial Park Campsite"
    },
]

export const Activities_Informational = [
    {
        title: "Snofest Village",
        description: "Snofest village text will go here.",
        source: {
            src: "https://i.imgur.com/yH4A5vR.jpeg",
            width: 2625,
            height: 3500,
            alt: "Woman hanging with the sno fest mascot"
        } 
    },
    {
        title: "Mini Putt",
        description: "Mini Putt text goes here",
        source: {
            src: "https://i.imgur.com/DSUtfuq.jpeg",
            width: 3375,
            height: 4500,
            alt: "Mini putt at sno fest"
        } 
    },
    {
        title: "Various Kids Activities",
        description: "Various kids activities goes here",
        source: {
            src: "https://i.imgur.com/4tyuMob.jpeg",
            width: 2250,
            height: 3000,
            alt: "kids having fun at sno fest. Man blows baloon animals for kids."
        }  
    },
    {
        title: "Live Music",
        description: "Live Music text goes here",
        source: {
            src: "https://i.imgur.com/UMEwADn.jpeg",
            width: 2625,
            height: 3500,
            alt: "Live music stage at sno fest village"
        } 
    },
    {
        title: "Arts and Crafts",
        description: "Arts and Crafts text goes here",
        source: {
            src: "https://i.imgur.com/8Z4RPvl.jpeg",
            width: 2625,
            height: 3500,
            alt: "Kids creating crafts at snowfest village"
        }  
    },
    {
        title: "Skiing",
        description: "Skiing text goes here",
        source: {
            src: "https://i.imgur.com/ZsoxEfL.jpeg",
            width: 2625,
            height: 3500,
            alt: "Image of sno fest mascot waving on a ski mountain"
        }  
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
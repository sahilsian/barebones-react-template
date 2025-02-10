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
    },
    {
        name: "Schedule",
        route: "/events",
    },
    {
        name: "Sponsors",
        route: "/sponsors",
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
    cta_label: "See the 2025 Event Schedule",
    cta_route_to: "/events",
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
    primary_button_text: "See our 2025 Schedule",
    primary_button_href: "/events",
    secondary_button_text: "Sponsors",
    secondary_button_href: "/sponsors"
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

export const Feb_8_Events = [
    {
        title: "Creation of Valentine's Day Cards",
        description: "Stop by the Campbellton Centennial Library to create Valentine's Day Cards that will be delivered to seniors in the community. All supplies provided. All ages welcome.",
        date: "February 8",
        time: "10:00 AM - 5:00 PM",
        location: "Campbellton Centennial Library"
    },
    {
        title: "Ice Sculptures",
        description: "Watch skilled sculptors transform blocks of ice into stunning works of art at Sugarloaf Provincial Park.",
        date: "February 8",
        time: "2:00 PM",
        location: "Sugarloaf Provincial Park"
    },
    {
        title: "A Tribute to Motley Crüe",
        description: "Rock out to an electrifying tribute performance dedicated to Motley Crüe! Tickets are $25 (+HST & fees) and available at Hard Luck Woman Records and Ticketpro.",
        date: "February 8",
        time: "7:30 PM",
        location: "Alma Hall"
    }
];

export const Feb_13_Events = [
    {
      title: "Guided Tours of the Athol House Museum",
      description: "Discover the history of our county and its three founding cultures: Mi'kmaq, Acadian, and Scottish.",
      date: "February 13",
      time: "11:00 AM - 4:00 PM",
      location: "Restigouche Gallery"
    },
    {
      title: "Zentangle Club",
      description: "Join the Campbellton Centennial Library to relax and create something beautiful. Open to ages 5 and up.",
      date: "February 13",
      time: "6:00 PM",
      location: "Campbellton Centennial Library"
    },
    {
      title: "A Tribute to the Former Atholville Carnaval Mascot",
      description: "A special tribute event organized by the Campbellton Municipal Council.",
      date: "February 13",
      time: "6:00 PM",
      location: "Alma Hall"
    },
    {
      title: "Sno-Fest Night Life",
      description: "Enjoy live music performances by local artists at various local bars.",
      date: "February 13",
      time: "Evening",
      location: "Various local bars"
    },
    {
      title: "Live Music: Danny Maltais",
      description: "Enjoy a performance by Danny Maltais as part of the Sno-Fest Night Life event.",
      date: "February 13",
      time: "7:30 PM",
      location: "Restigouche Snowmobile Club"
    }
];

export const Feb_14_Events = [
    {
      title: "Guided Tours of the Athol House Museum",
      description: "Discover the history of our county and its three founding cultures: Mi'kmaq, Acadian, and Scottish.",
      date: "February 14",
      time: "1:00 PM - 4:00 PM",
      location: "Restigouche Gallery"
    },
    {
      title: "Valentine’s Day Bingo",
      description: "Join the Campbellton Centennial Library for a fun Valentine’s Day Bingo session. Places are limited, registration required at 506-753-5253.",
      date: "February 14",
      time: "3:45 PM - 4:45 PM",
      location: "Campbellton Centennial Library"
    },
    {
      title: "Sno-Fest Village",
      description: "Enjoy various winter activities including a fire pit, hot chocolate, and fun games like mini putt, bowling, tic-tac-toe, and horse sleigh rides.",
      date: "February 14",
      time: "4:00 PM - 8:00 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Grand Opening at Sno-Fest Village",
      description: "Official opening with cake, live music featuring James Young Band, and fireworks (weather permitting).",
      date: "February 14",
      time: "6:00 PM - 8:00 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Sno-Fest Night Life",
      description: "Local bars feature live performances from talented musicians.",
      date: "February 14",
      time: "Evening",
      location: "Various local bars"
    },
    {
      title: "Live Music: Danny Maltais",
      description: "Danny Maltais performs live as part of Sno-Fest Night Life.",
      date: "February 14",
      time: "7:00 PM",
      location: "Brasserie 1026"
    },
    {
      title: "Live Music: Daniel Poirier",
      description: "Daniel Poirier performs live as part of Sno-Fest Night Life.",
      date: "February 14",
      time: "9:00 PM",
      location: "Legion"
    },
    {
      title: "Live Music: Bolton Creek Band",
      description: "Bolton Creek Band performs live as part of Sno-Fest Night Life.",
      date: "February 14",
      time: "9:00 PM",
      location: "Restigouche Snowmobile Club"
    }
];

export const Feb_15_Events = [
    {
      title: "Meet Our Artists",
      description: "A great opportunity to visit and talk with artists from the region who will paint, sculpt, and create on the spot!",
      date: "February 15",
      time: "10:00 AM - 4:00 PM",
      location: "Restigouche Gallery"
    },
    {
      title: "Legion Chili Luncheon",
      description: "$15 for a bowl of chili, drink, and dessert.",
      date: "February 15",
      time: "11:00 AM - 1:00 PM",
      location: "Royal Canadian Legion Branch 19",
      information: "506-759-8025"
    },
    {
      title: "Warm up at the Sno-Fest Cozy Corner",
      description: "Enjoy face painting, crafts, a coloring contest, a magician, and a booth from the Campbellton Centennial Library.",
      date: "February 15",
      time: "12:00 PM - 6:00 PM",
      location: "Sugarloaf Provincial Park Lodge"
    },
    {
      title: "Sno-Fest Village",
      description: "A fun-filled day with live entertainment, games, a fire pit, hot chocolate, and horse sleigh rides.",
      date: "February 15",
      time: "12:00 PM - 8:00 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Live Music: Claude Roy",
      description: "Live performance by Claude Roy as part of the Sno-Fest Village entertainment lineup.",
      date: "February 15",
      time: "1:30 PM - 2:30 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Live Music: Daniel Poirier",
      description: "Live performance by Daniel Poirier as part of the Sno-Fest Village entertainment lineup.",
      date: "February 15",
      time: "3:30 PM - 4:30 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Dance Party with DJ Tyler",
      description: "A fun dance party featuring DJ Tyler.",
      date: "February 15",
      time: "6:00 PM - 7:30 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Hot Dog Fundraiser for the Sugarloaf Provincial Park",
      description: "Free hot dogs, limit of 2 per person. Hosted by the Canadian Ski Patrol.",
      date: "February 15",
      time: "1:00 PM - 3:00 PM",
      location: "Next to the Patrol First Aid Hut"
    },
    {
      title: "Music with the Country Golden Girls",
      description: "Live country music, free and open to all ages.",
      date: "February 15",
      time: "1:00 PM - 3:00 PM",
      location: "Tide Head Fire Hall"
    },
    {
      title: "Voices of Resilience",
      description: "An evening of gastronomy and entertainment to benefit the Restigouche Suicide Prevention Committee. Tickets: $75.",
      date: "February 15",
      time: "5:30 PM",
      location: "Alma Hall"
    },
    {
      title: "Illuminated Pond Skating",
      description: "Enjoy an evening of skating under the lights.",
      date: "February 15",
      time: "6:00 PM - 8:00 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Sno-Fest Night Life",
      description: "Live performances at various local bars.",
      date: "February 15",
      time: "Evening",
      location: "Various local bars"
    },
    {
      title: "Live Music: Renelle & Tracy",
      description: "Performance by Renelle & Tracy as part of Sno-Fest Night Life.",
      date: "February 15",
      time: "8:00 PM",
      location: "Artisan Brewing Company"
    },
    {
      title: "Live Music: Daniel Poirier",
      description: "Live performance by Daniel Poirier as part of Sno-Fest Night Life.",
      date: "February 15",
      time: "9:00 PM",
      location: "Legion"
    },
    {
      title: "DJ Doozy",
      description: "Dance the night away with DJ Doozy.",
      date: "February 15",
      time: "10:00 PM",
      location: "Dooly's"
    }
];

export const Feb_16_Events = [
    {
      title: "Warm up at the Sno-Fest Cozy Corner",
      description: "Enjoy crafts, face painting, a magician, and a Love Tree activity. Canteen service available on-site ($).",
      date: "February 16",
      time: "12:00 PM - 5:00 PM",
      location: "Sugarloaf Provincial Park Lodge"
    },
    {
      title: "Sno-Fest Village",
      description: "Live local entertainment, games, hot chocolate, a fire pit, and horse sleigh rides.",
      date: "February 16",
      time: "12:00 PM - 5:00 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Live Music: Paul Landry",
      description: "Enjoy a live performance by Paul Landry as part of Sno-Fest Village entertainment.",
      date: "February 16",
      time: "1:30 PM - 2:30 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Live Music: Linda Bergeron",
      description: "Enjoy a live performance by Linda Bergeron as part of Sno-Fest Village entertainment.",
      date: "February 16",
      time: "3:30 PM - 4:30 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Hot Dog Fundraiser",
      description: "Free hot dogs, limit of 2 per person. Hosted by the Canadian Ski Patrol.",
      date: "February 16",
      time: "1:00 PM - 3:00 PM",
      location: "Next to the Patrol First Aid Hut"
    },
    {
      title: "Acoustic Country & Bluegrass Jam Session",
      description: "A lively jam session organized by the Campbellton Bluegrass Festival.",
      date: "February 16",
      time: "2:00 PM - 4:00 PM",
      location: "Restigouche Snowmobile Club"
    },
    {
      title: "Family Glow Dance",
      description: "A free dance party with UV lights, a magic show, glow bracelets, and more! Wear white or neon clothing.",
      date: "February 16",
      time: "6:00 PM - 9:00 PM",
      location: "Centre de la Vallée, Val D'Amours"
    }
];

export const Feb_17_Events = [
    {
      title: "Richelieu Family Day",
      description: "Enjoy inflatable games, mascots, activities, snacks, and more! Organized by Club Richelieu de Campbellton.",
      date: "February 17",
      time: "10:00 AM - 12:00 PM",
      location: "Le Galion des Appalaches School"
    },
    {
      title: "Family Day at Sugarloaf Provincial Park",
      description: "Try skiing, skating, snowshoeing, and more! Free ski/snowboard passes all day (registration required, equipment rental not included).",
      date: "February 17",
      time: "12:00 PM - 4:00 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Warm up at the Sno-Fest Cozy Corner",
      description: "Enjoy crafts, face painting, a magician, and The Love Tree activity. Canteen service available on-site ($).",
      date: "February 17",
      time: "12:00 PM - 4:00 PM",
      location: "Sugarloaf Provincial Park Lodge"
    },
    {
      title: "Sno-Fest Village",
      description: "Live local entertainment, games, hot chocolate, a fire pit, and horse sleigh rides.",
      date: "February 17",
      time: "12:00 PM - 4:00 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Live Music: Diane Ouellette",
      description: "Enjoy a live performance by Diane Ouellette as part of the Sno-Fest Village entertainment.",
      date: "February 17",
      time: "1:30 PM - 2:30 PM",
      location: "Sugarloaf Provincial Park"
    },
    {
      title: "Live Music: Eva Malley",
      description: "Enjoy a live performance by Eva Malley as part of the Sno-Fest Village entertainment.",
      date: "February 17",
      time: "3:00 PM - 4:00 PM",
      location: "Sugarloaf Provincial Park"
    }
];


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
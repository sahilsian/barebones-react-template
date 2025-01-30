import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import About from "../../routes/agnostic/home/home";
import Home from "../../routes/agnostic/home/home";
import Birthday from "../../public/images/birthday.jpg"
import Golf from "../../public/images/golf.jpg"
import Bowling_Full from "../../public/images/bowling_full.jpg"
import Fish from "../../public/images/fish.jpg"
import Sno_Fest_Logo from "../../public/images/sno_fest_logo.jpg"
import Sno_Fest_Hero from "../../public/images/sno_fest_hero.jpg"

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
        route: "",
        component: <Home></Home>
    },
    {
        name: "About",
        route: "about",
        component: <About></About>
    },
    {
        name: "Entertainment",
        route: "about",
        component: <About></About>
    },
    {
        name: "Bowling",
        route: "about",
        component: <About></About>
    },
    {
        name: "Arcade",
        route: "about",
        component: <About></About>
    }
    ,
    {
        name: "Food",
        route: "about",
        component: <About></About>
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
    hero_heading: "Enjoy the Winter Magic with us.",
    hero_subheading: "Come join us February 13th - 17th for the annual Campbellton Snofest.",
    hero_img: Sno_Fest_Hero,
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
            title: "Snofest Village",
            description: "Text Here",
            source: "https://i.imgur.com/KYzesVf.jpeg"
        },
        {
            title: "Text Here",
            description: "Arcade Text Here",
            source: "https://i.imgur.com/sE6sz2l.jpeg"
        },
        {
            title: "Bowling",
            description: "Arcade Text Here",
            source: "https://img1.wsimg.com/isteam/ip/a1d5a11b-870a-4049-9f15-3ea947340f77/IMG_6314.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:365,h:365,cg:true"
        }
    ]
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

export const Activities_Informational = [
    {
        title: "Bowling",
        description: "Looking for a little rnr? Rec n Roll offers an 8 lane bowling center with lots of fun events for all ages. Check out our bowling schedule and get in the action!",
        source: "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/474018134_122197474334232008_5611768862522671141_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=laLPbWmCcwQQ7kNvgFmH0XP&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AVCQsC6rbm9P0PYVPNqCznS&oh=00_AYBQH1fy8YcqWTKx_khsfiDkhtyXffm7SL7tRb971HE_NQ&oe=6794C7C9"
    },
    {
        title: "Arcade (Coming Soon)",
        description: "Coming soon to Rec n Roll, our arcade provides an incredible experience for those looking for fun. Our arcade is anticipated to have a variety of games and lots of prizes to win.",
        source: "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/471190519_122192895734232008_1981575660280231824_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=pQ61_Vhe1gkQ7kNvgExmc0l&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=AMCILtRZI7MATghmmu0llBZ&oh=00_AYAHpaxtgensZ_6YILeH4QpuXoKGpkxo07tmSw02O2jgQw&oe=6794ADB8"
    },
    {
        title: "Indoor Play Room",
        description: "Our indoor playroom provides a wonderful experience for kids who want to have fun! Parents can relax while kids can enjoy a playroom specifically designed to be safe and entertaining all at the same time.",
        source: "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/468915337_122189430962232008_2360857542946274468_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VrezgUFLoCkQ7kNvgFDEogr&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=APg80L91gxtp_aANO6R7D39&oh=00_AYCTmIuTIyUQ9JWQ3AxEyTXyCkIiJMaAh1ETQGzHcDEtag&oe=6794A5B3"
    },
    {
        title: "Billy's Bistro",
        description: "Enjoy fine eats at Rec n Roll through Billy's Bistro. See our menu.",
        source: "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/467642085_122187477068232008_7008331369652330692_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WvteiQIAn44Q7kNvgG15Dqg&_nc_zt=23&_nc_ht=scontent-yyz1-1.xx&_nc_gid=ARL4cw6yXlkn0Tk1tvjpPue&oh=00_AYBup7Ree7XvimnmkUCE2xzy_oL8kNIcbWZ_IACh-6v9sg&oe=6794DD4B"
    },
    {
        title: "Birthday Parties",
        description: "Want to have a birthday party for you or someone special at Rec n Roll? Enjoy our selection of birthday plans",
        source: Birthday
    },
    {
        title: "Mini Golf (Coming Soon)",
        description: "More information to come in 2025.",
        source: Golf
    }
]
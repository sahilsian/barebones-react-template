import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import About from "../routes/agnostic/about";
import Home from "../routes/agnostic/home/home";

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


export const Socials = [
    {
        name: "https://instagram.com/",
        icon: <FaInstagram color={themes[0].text} size={24}></FaInstagram>
    },
    {
        name: "https://facebook.com/",
        icon: <FaFacebook color={themes[0].text} size={24}></FaFacebook>
    },
    {
        name: "https://youtube.com/",
        icon: <FaYoutube color={themes[0].text} size={24}></FaYoutube>
    },
    {
        name: "https://tiktok.com/",
        icon: <FaTiktok color={themes[0].text} size={24}></FaTiktok>
    }
]

export const Activities = [
    {
        title: "Arcade",
        description: "Arcade Text Here",
        source: "https://placehold.co/600x400/EEE/31343C"
    },
    {
        title: "Arcade",
        description: "Arcade Text Here",
        source: "https://placehold.co/600x400/EEE/31343C"
    },
    {
        title: "Arcade",
        description: "Arcade Text Here",
        source: "https://placehold.co/600x400/EEE/31343C"
    },
    {
        title: "Arcade",
        description: "Arcade Text Here",
        source: "https://placehold.co/600x400/EEE/31343C"
    },
    {
        title: "Arcade",
        description: "Arcade Text Here",
        source: "https://placehold.co/600x400/EEE/31343C"
    },
    {
        title: "Arcade",
        description: "Arcade Text Here",
        source: "https://placehold.co/600x400/EEE/31343C"
    }
]
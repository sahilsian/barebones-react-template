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


export const art = [
    {
        mame: '"Sahil Sian", Sahil Sian, Graphite, 2023',
        description: "Self Portrait of Sahil Sian. Graphite on vellum bristol paper.",
        image: "https://i.ibb.co/Krry3MR/402410472-308190668836080-4405343109634659837-n.jpg",
        alt: "Sahil Sian self portrait drawing"
    },
    {
        mame: 'Playstation Controller Study, Sahil Sian, Vector Graphics, 2021',
        description: "Hyper realistic play station controller created using vector graphics. Scallable for all sizes.",
        image: "https://i.ibb.co/Y7rPF19/428442496-383630920957853-6165255927581145176-n.jpg",
        alt: "Vector graphics play station controller"
    },
    {
        mame: '"Bridgewater, NS", Sahil Sian, Graphite, 2024',
        description: "Drawing a rainy day on a townside of Nova Scotia.",
        image: "https://i.imgur.com/Ogkks0d.jpeg",
        alt: "Drawing a rainy day on a townside of Nova Scotia."
    },
    {
        mame: '"War and Remembrance", Sahil Sian, Graphite, 2019',
        description: "Competition piece for 2019 National Youth Remembrance Contest Canada.",
        image: "https://i.ibb.co/GCvZdRf/65779804-150885499387741-6023726016005703968-n.jpg",
        alt: "Drawing of an older veteran in remembrance of his past."
    }
]

export const ProductUI = [
    {
        mame: 'Dismegle App',
        description: "Branding and marketing for the Dismegle discord community. Developed a marketing strategy that grew Dismegle to 100,000 users.",
        image: "https://i.imgur.com/BfpnRJU.png",
        alt: "Dismegle Logo"
    },
    {
        mame: 'Estate Lynx Branding & UI',
        description: "Branding and UI for Red Bull Canada Basement winners, Estate Lynx.",
        image: "https://i.imgur.com/JE3RbNL.png",
        alt: "UX/UI Design for Estate Lynx"
    },
    {
        mame: 'Rec N Roll Website Design & Development',
        description: "Website Design and Development for Rec N Roll, a family event center in Cambelton, NB.",
        image: "https://i.imgur.com/CZVqwyh.png",
        alt: "Image of Wireframes"
    },
    {
        mame: 'Elephant App. Research, Design & Frontend Development',
        description: "Elephant is an application intented to connect individuals with intellectual disabilities with specialized educators. Application research, design & development.",
        image: "https://i.imgur.com/pLtj5ie.png",
        alt: "Slide from app presentation deck."
    }
]

export const themes = [
    {
        name: "Default",
        background: "#FFFFFF",
        text: "#000000",
        bordercolor: "#ECF0F9",
        colors: {
            color_main: "#FFFFFF",
            color_secondary: "#FDF4DD",
            color_ternary: "#FDF4DD",
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
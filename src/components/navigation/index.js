import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react'
import Text from "../text";
import { Context } from "../../utils/context_provider";
import { IoMenu } from "react-icons/io5";
import AlertStatement from "../alertStatement";
import NavigationIdentity from "../navigationIdentity";
import Button from "../button";
import useScrollPosition from "../../utils/hooks/useScrollPosition";
import Link from "next/link";

const Navigation = ({ tabs, cta_label = "Our Activities", cta_route_to = "/", alert_headline = "For more information, email us at:", alert_hyperlink_text = "rnr@recnroll.ca", navigation_heading = "Rec N Roll", navigation_subheading = "Campbellton, NB" }) => {

    const scrollPosition = useScrollPosition()
    const { theme, language, setLanguage } = useContext(Context);
    const [active, setActive] = useState(false);

    useEffect(() => {
        console.log(scrollPosition)
    }, [scrollPosition])

    return (
        <div className={`fixed ${((scrollPosition > 100) || active) && "bg-[#20346f]"}  top-0 overflow-hidden flex flex-col w-full z-[100] pt-[20px] md:pt-[0px] px-7`}>
            <div className="md:block ">
                <AlertStatement headline={alert_headline} hyperlink_text={alert_hyperlink_text} theme={theme}></AlertStatement>
            </div>
            <div className={`md:p-5`}>
                <div className={`flex  justify-between mx-auto w-full h-full max-w-[1280px] md:px-4`}>
                    <div className="block md:flex gap-4 items-center">
                        <div>
                            <NavigationIdentity subheading={navigation_subheading} heading={navigation_heading}></NavigationIdentity>
                        </div>
                    </div>
                    <div className="md:flex items-center gap-4">
                        {tabs.map((tab) => {
                            return (

                                <div key={tab.name} className={`hidden md:flex `}>
                                    <NavigationTab theme={theme} name={tab.name} route={tab.route}></NavigationTab>
                                </div>
                            )
                        })}
                        <div className="md:block hidden flex-1">
                            <Button routeTo={cta_route_to} cta_label={cta_label}></Button>
                        </div>
                        <div className=" md:block hidden justify-center items-center text-white  ">
                            <div className="flex gap-3  ">
                                <span onClick={() => { setLanguage("EN") }} className="cursor-pointer" style={language == "EN" ? { color: "rgb(255, 242, 0)" } : {}}>EN</span>
                                /
                                <span onClick={() => { setLanguage("FR") }} className="cursor-pointer" style={language == "FR" ? { color: "rgb(255, 242, 0)" } : {}}>FR</span>
                            </div>
                        </div>
                    </div>



                    <div className="md:hidden flex items-center">
                        <div onClick={() => {
                            setActive(!active)
                        }} style={{ borderColor: "#FFFFFF" }} className="rounded-sm border-[1px]">
                            <IoMenu size={32} color={"#FFFFFF"}></IoMenu>
                        </div>
                    </div>
                </div>
                <div className=" md:hidden flex justify-end  text-white  ">
                    <div className="flex gap-2  ">
                        <span onClick={() => { setLanguage("EN") }} className="cursor-pointer" style={language == "EN" ? { color: "rgb(255, 242, 0)" } : {}}>EN</span>
                        /
                        <span onClick={() => { setLanguage("FR") }} className="cursor-pointer" style={language == "FR" ? { color: "rgb(255, 242, 0)" } : {}}>FR</span>
                    </div>
                </div>
                <div className="md:hidden py-4">
                    {tabs.map((tab) => {
                        return (
                            <div key={tab.name} className={` ${!active && "hidden"} md:flex `}>
                                <NavigationTab theme={theme} name={tab.name} route={tab.route}></NavigationTab>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

const NavigationTab = ({ name, route, theme }) => {
    const router = useRouter();
    const path = router.pathname;
    const isActive = route === "" ? path === "/" : path === `/${route}`;
    console.log(route)
    return (
        <div className="">
            <Link href={route} className="h-full flex items-center">
                <span
                    style={{ textDecorationColor: theme.text }}
                    className={`cursor-pointer ${isActive ? "font-semibold underline" : ""}`}
                >
                    <Text color={"#FFFFFF"} level={"p"} text={name}></Text>
                </span>
            </Link>

        </div>
    );
};

export default Navigation
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from 'react'
import Text from "../text";
import { Context } from "../../utils/context_provider";
import { IoMenu } from "react-icons/io5";
import AlertStatement from "../alertStatement";
import NavigationIdentity from "../navigationIdentity";
import Button from "../button";
import useScrollPosition from "../../utils/hooks/useScrollPosition";

const Navigation = ({ tabs, label = "Our Activities", alert_headline="For more information, email us at:", alert_hyperlink_text="rnr@recnroll.ca", navigation_heading="Rec N Roll", navigation_subheading="Campbellton, NB"  }) => {

    const scrollPosition = useScrollPosition()
    const { theme } = useContext(Context);
    const [active, setActive] = useState(false);

    useEffect(() => {
        console.log(scrollPosition)
    }, [scrollPosition])
    return (
        <div className={`fixed ${scrollPosition > 100 && "bg-[#20346f]"}  top-0 overflow-hidden flex flex-col w-full z-[100]`}>
            <AlertStatement headline={alert_headline} hyperlink_text={alert_hyperlink_text} theme={theme}></AlertStatement>
            <div className={`p-5`}>
                <div className={`flex  justify-between mx-auto w-full h-full max-w-[1280px] px-4`}>
                    <div className="block md:flex gap-4 items-center">
                        <div>
                            <NavigationIdentity subheading={navigation_subheading} heading={navigation_heading}></NavigationIdentity>
                        </div>
                    </div>
                    <div className="md:flex items-center gap-4">
                        {tabs.map((tab) => {
                            return (

                                <div className={` ${!active && "hidden"} md:flex `}>
                                    <NavigationTab theme={theme} name={tab.name} route={tab.route}></NavigationTab>
                                </div>
                            )
                        })}
                        <Button label={label}></Button>
                    </div>


                    <div className="md:hidden  mb-[6px]">
                        <div onClick={() => {
                            setActive(!active)
                        }} style={{ borderColor: theme.text }} className="rounded-sm border-[1px]">
                            <IoMenu size={32} color={theme.text}></IoMenu>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const NavigationTab = ({ name, route, theme }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const isActive = route === "" ? path === "/" : path === `/${route}`;
    return (
        <div className="">
            <span
                onClick={() => {
                    navigate(`/${route}`)
                }}
                style={{ textDecorationColor: theme.text }}
                className={` cursor-pointer ${isActive ? "font-semibold underline" : ""}`}
            ><Text color={"#FFFFFF"} level={"p"} text={name}></Text></span>
        </div>
    )
}


export default Navigation
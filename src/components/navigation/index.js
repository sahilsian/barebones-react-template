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

const Navigation = ({ tabs, label = "Our Activities", alert_headline="For more information, email us at:", alert_hyperlink_text="rnr@recnroll.ca", navigation_heading="Rec N Roll", navigation_subheading="Campbellton, NB"  }) => {

    const scrollPosition = useScrollPosition()
    const { theme } = useContext(Context);
    const [active, setActive] = useState(false);

    useEffect(() => {
        console.log(scrollPosition)
    }, [scrollPosition])
    return (
        <div className={`fixed ${((scrollPosition > 100) || active) && "bg-[#20346f]"}  top-0 overflow-hidden flex flex-col w-full z-[100] pt-[40px] md:pt-[0px] px-7`}>
            <div className="md:block hidden">
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
                        <div className="md:block hidden">
                            <Button label={label}></Button>
                        </div>
                    </div>


                    <div className="md:hidden  mb-[6px]">
                        <div onClick={() => {
                            setActive(!active)
                        }} style={{ borderColor: "#FFFFFF" }} className="rounded-sm border-[1px]">
                            <IoMenu size={32} color={"#FFFFFF"}></IoMenu>
                        </div>
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
            <Link href={route}>
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
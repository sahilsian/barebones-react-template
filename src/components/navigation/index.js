import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from 'react'
import Text from "../text";
import { Context } from "../../lib/context_provider";
import { IoMenu } from "react-icons/io5";
import AlertStatement from "../alertStatement";
import NavigationIdentity from "../navigationIdentity";
import Button from "../button";
const Navigation = ({ tabs, label="Our Activities" }) => {
    const { theme } = useContext(Context);
    const [active, setActive] = useState(false);
    return (
        <div style={{ borderColor: theme.bordercolor, border: "0.5px solid" }} className={``}>
            <AlertStatement theme={theme}></AlertStatement>
            <div className={`flex justify-between mx-auto max-w-[1280px] py-6 p-4`}>
                <div className="block md:flex gap-4 items-center">
                    <div>
                        <NavigationIdentity></NavigationIdentity>
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
                    <div onClick={()=> {
                        setActive(!active)
                }} style={{ borderColor: theme.text }} className="rounded-sm border-[1px]">
                        <IoMenu size={32} color={theme.text}></IoMenu>
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
            ><Text level={"p"} text={name}></Text></span>
        </div>
    )
}


export default Navigation
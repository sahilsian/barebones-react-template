import Button from "../button"
import Spacer from "../spacer"
import Text from "../text"
import { Hero_Config } from "../../utils/constants/recnroll"
import { useParallax } from "react-scroll-parallax"
import Image from "next/image"

const Hero = (

    {
        heading = Hero_Config.hero_heading,
        subheading = Hero_Config.hero_subheading,
        heroImg = Hero_Config.hero_img,
        heroVid = Hero_Config.hero_vid,
        primary_button_text = Hero_Config.primary_button_text,
        secondary_button_text = Hero_Config.secondary_button_text
    }) => {

    const { ref } = useParallax({
        speed: -20,
    });

    return (
        <div className=" w-full h-full -z-10 overflow-hidden">
            <div className={`w-full h-[100vh] relative flex justify-center`}>
                <div className="relative w-full h-full">
                    {heroVid &&
                        <video autoPlay muted loop className="w-full object-cover h-full absolute z-0">
                            <source src={heroVid}></source>
                        </video>
                    }
                    {heroImg &&
                        <Image ref={ref} src={heroImg.src} width={heroImg.width} height={heroImg.height} alt={heroImg.alt} className="w-full h-full object-cover absolute z-0"></Image>
                    }
                    <div  className="absolute z-[1] bg-[#070d21]  opacity-80 w-full h-full">
                    </div>
                </div>
                <div className="mx-auto max-w-[1280px] p-4 h-full absolute z-10 w-full flex flex-col justify-center">
                    <div className="px-2 ">
                        <div className="flex h-full justify-center">
                            <div className="flex-1 flex justify-between flex-col w-full">
                                <div className="flex-1">
                                    {/* Layout Purposes */}
                                </div>

                                <div className=" flex-[3] w-full">
                                    <div className="max-w-[800px] mx-auto">
                                        <Text align={"center"} color={"#FFFFFF"} level={1} text={heading}></Text>
                                    </div>
                                    <Spacer height="20px"></Spacer>
                                    <div className="max-w-[400px] mx-auto">
                                        <Text align={"center"} color={"#FFFFFF"} level={"4"} text={subheading}></Text>
                                    </div>
                                    <Spacer height="50px"></Spacer>
                                    <div className="flex gap-[12px] justify-center">
                                        <div className="max-w-[250px]">
                                            <Button status="primary" label={primary_button_text}></Button>
                                        </div>
                                        <div className="max-w-[250px]">
                                            <Button status="secondary" label={secondary_button_text}></Button>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex-1">
                                    {/* Slider Buttons */}
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
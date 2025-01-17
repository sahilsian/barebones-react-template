import Button from "../button"
import Spacer from "../spacer"
import Text from "../text"
import BowlingImg from "../../public/images/bowling.jpg"

const Hero = (
    {
        heading="Family fun in Campbellton", 
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nis", 
        heroImg=BowlingImg
    }) => {
    return (
        <div className="fixed top-[200px] w-full h-full -z-10">
            <div className={`w-full h-[880px] relative flex justify-center`}>
                <div className="relative w-full h-full">
                    <img src={heroImg} className="w-full object-cover h-full absolute z-0"></img>
                    <div className="absolute z-[1] bg-black opacity-70 w-full h-full">
                    </div>
                </div>
                <div className="mx-auto max-w-[1280px] p-4 h-full absolute z-10">
                    <div className="px-2 h-full">
                        <div className="flex h-full">
                            <div className="flex-1 flex justify-between flex-col">
                                <div className="flex-1">
                                    {/* Layout Purposes */}
                                </div>

                                <div className=" flex-[3]">
                                    <div>
                                        <Text color={"#FFFFFF"} level={1} text={heading}></Text>
                                    </div>
                                    <div>
                                        <Text color={"#FFFFFF"} level={"p"} text={subheading}></Text>
                                    </div>
                                    <Spacer height="20px"></Spacer>
                                    <div className="max-w-[250px]">
                                        <Button label="See Our Activities"></Button>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    {/* Slider Buttons */}
                                </div>
                                
                            </div>
                            <div className="flex-1 flex">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
import Button from "../button"
import Spacer from "../spacer"
import Text from "../text"
import Cover from "../../public/images/cover.mp4"

const Hero = (
    
    {
        heading="Family fun in Campbellton", 
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nis", 
        heroImg=Cover
    }) => {

    return (
        <div className=" w-full h-full -z-10">
            <div className={`w-full h-[820px] relative flex justify-center`}>
                <div className="relative w-full h-full">
                    <video autoPlay muted loop className="w-full object-cover h-full absolute z-0">
                        <source src={heroImg}></source>
                    </video>
                    <div className="absolute z-[1] bg-black opacity-80 w-full h-full">
                    </div>
                </div>
                <div className="mx-auto max-w-[1280px] p-4 h-full absolute z-10 w-full flex flex-col justify-center">
                    <div className="px-2 ">
                        <div className="flex h-full">
                            <div className="flex-1 flex justify-between flex-col w-full">
                                <div className="flex-1">
                                    {/* Layout Purposes */}
                                </div>

                                <div className=" flex-[3] w-full">
                                    <div>
                                        <Text color={"#FFFFFF"} level={1} text={heading}></Text>
                                    </div>
                                    <Spacer height="20px"></Spacer>
                                    <div className="max-w-[400px]">
                                        <Text color={"#FFFFFF"} level={"4"} text={subheading}></Text>
                                    </div>
                                    <Spacer height="50px"></Spacer>
                                    <div className="flex gap-[12px]">
                                        <div className="max-w-[250px]">
                                            <Button status="primary" label="See Our Activities"></Button>
                                        </div>
                                        <div className="max-w-[250px]">
                                            <Button status="secondary" label="Sign Up"></Button>
                                        </div>
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
import { useParallax } from "react-scroll-parallax";
import Center from "../center"
import Text from "../text"
import Spacer from "../spacer";

const BlueBannerMini = ({ title = "hello world", description="hello world" }) => {

    const { ref } = useParallax({
        speed: 8,
    });

    return (
        <div>
            <div className="w-full relative min-h-[600px] bg-[#23568D]">
                <div className="w-full top-0 absolute h-full z-40 ">
                        <Center>
                            <Spacer height="300px"></Spacer>
                            <Text level={1} color={"#FFFFFF"} text={title}></Text>
                            <Text level={"p"} text={description} color={"#FFFFFF"}></Text>
                        </Center>

                </div>
                <div className="absolute z-10 bottom-[-100px] md:bottom-[-190px] left-0 w-full ">
                    <div className="w-full">
                        <img ref={ref} width={"100%"} src="/images/banner.svg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlueBannerMini
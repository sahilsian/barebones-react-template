import Center from "../center"
import Text from "../text"
import Spacer from "../spacer"
import { useParallax } from "react-scroll-parallax";

const BlueBanner = ({ title = "SnoFest 2025 Schedule", dates = "Campbellton, NB | February 7th - 16th, 2025", children }) => {

  const { ref } = useParallax({
    speed: 8,
  });
  return (
    <div>

      <div className="w-full relative bg-[#23568D]">
        {/* Sahil did a 400 iq thingy here */}
        <div className="w-full !text-[#23568D] !border-b-[#23568D] text-inherit border-inherit force-text-blue">
          <Center>
            <Spacer height="200px"></Spacer>
            {children}
            <Spacer height="100px"></Spacer>
          </Center>

        </div>
        <div className="w-full top-0 absolute h-full z-40">
          <Center>
            <Spacer height="100px"></Spacer>

            <Text level={2} color={"#FFFFFF"} text={title}></Text>
            <Text level={6} text={dates} color={"#FFFFFF"}></Text>
            <Spacer height="20px"></Spacer>
            {children}
          </Center>
        </div>
        <div className="absolute z-10 bottom-[-100px] md:bottom-[-190px] left-0 w-full ">
          <div className="w-full">
            <img ref={ref} width={"100%"} src="/images/banner.svg"></img>
          </div>
        </div>

      </div>
      <Spacer height="150px"></Spacer>
    </div>

  )
}

export default BlueBanner
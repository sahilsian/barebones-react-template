import Center from "../center"
import Text from "../text"
import Spacer from "../spacer"
import { useParallax } from "react-scroll-parallax";

const BlueBanner = ({title="SnoFest 2025 Schedule", dates="Campbellton, NB | February 7th - 16th, 2025", children}) => {

    const { ref } = useParallax({
          speed: 8,
      });
    return (
      <div>

        <div className="w-full min-h-[900px] relative bg-[#23568D]">
            <div className="absolute bottom-[-100px] md:bottom-[-190px] left-0 w-full">
                <div className="w-full">
                  <img ref={ref} width={"100%"} src="/images/banner.svg"></img>
                </div>
            </div>
            <div className="w-full h-full absolute">
              <Center>
                <Spacer height="100px"></Spacer>
                <div className="w-full bg-white py-4 rounded-full flex items-center justify-center max-w-[360px]">
                  <Text level={6} text={dates}></Text>
                </div>
                <Spacer height="20px"></Spacer>
                <Text level={2} color={"#FFFFFF"} text={title}></Text>
                <Spacer height="20px"></Spacer>
                <div className="w-full max-w-[300px] border-b-[1px] border-[#FFFFFF20]"></div>
                <Spacer height="30px"></Spacer>
                {children}
              </Center>
            </div>
        </div>
        <Spacer height="150px"></Spacer>
      </div>

    )
}

export default BlueBanner
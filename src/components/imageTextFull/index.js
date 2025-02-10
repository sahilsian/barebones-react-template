import { useParallax } from "react-scroll-parallax";
import Center from "../center"
import Img from "../image"
import Info from "../info"

const ImageTextFull = ({ descriptor = "NOW", heading = "Heading", subheading = "Subheading", cta_text = "See More", cta_link = "https://google.com/", img_source, left, right }) => {

    const ref = useParallax({
        speed: 7,
    });

    const refimg = useParallax({
        speed: -4,
    });

    return (
        <div className="relative md:max-h-[800px] overflow-hidden">
            <div className="">
                <div className="flex md:absolute  relative">
                {
                        right &&
                        <div className=" hidden md:block flex-1">

                        </div>
                    }
                    <div ref={ref.ref} className="flex-1 bg-opacity-90   bg-white  flex items-center z-50 py-20 px-[40px]">
                        <Info descriptor={descriptor} heading={heading} subheading={subheading} cta_text={cta_text} cta_link={cta_link}>
                        </Info>
                    </div>
                    {
                        left &&
                        <div className=" hidden md:block flex-1">

                        </div>
                    }

                </div>
                <div ref={refimg.ref} className="w-full right-0 top-0 min-w-[200px] z-40 flex items-center md:overflow-hidden ">
                    <Img width={img_source.width} height={img_source.height} maxHeight={"none"} alt={img_source.alt} src={img_source.src}></Img>
                </div>
            </div>
        </div>
    )
}

export default ImageTextFull
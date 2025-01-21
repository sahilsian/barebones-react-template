import Center from "../center"
import Image from "../image"
import Info from "../info"

const ImageTextFull = ({ descriptor = "NOW", heading = "Heading", subheading = "Subheading", cta_text = "See More", cta_link = "https://google.com/", img_source, reverse }) => {
    return (
        <div className="relative">
            {reverse ?
                <div>
                    <div className="absolute w-full h-[100%] left-0 top-0 max-w-[700px] z-40 flex items-center">
                        <Image width="100%" height="100%" maxHeight={"none"} src={img_source}></Image>
                    </div>
                    <Center>
                        <div className="flex min-h-[400px] relative">

                            <div className=" flex-1">

                            </div>
                            <div className=" flex-1 flex items-center bg-white z-50 py-20">
                                <Info descriptor={descriptor} heading={heading} subheading={subheading} cta_text={cta_text} cta_link={cta_link}>
                                </Info>
                            </div>
                        </div>
                    </Center>

                </div>

                :
                <div>
                    <Center>
                        <div className="flex min-h-[400px] relative">
                            <div className=" flex-1 flex items-center bg-white z-50 py-20">
                                <Info descriptor={descriptor} heading={heading} subheading={subheading} cta_text={cta_text} cta_link={cta_link}>
                                </Info>
                            </div>
                            <div className=" flex-1">

                            </div>

                        </div>
                    </Center>
                    <div className="absolute w-full h-[100%] right-0 top-0 max-w-[700px] z-40 flex items-center">
                        <Image width="100%" height="100%" maxHeight={"none"} src={img_source}></Image>
                    </div>
                </div>
            }

        </div>
    )
}

export default ImageTextFull
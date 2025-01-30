import Hyperlink from "../hyperlink"
import Image from "../image"
import Spacer from "../spacer"
import Text from "../text"

const ImageText = ({source="https://placehold.co/600x400/png", hasDescription=true, title='Art Piece', description="This is a description.", link="", shadow, maxHeight="400px", noText}) => {
    return (
        <div className="min-w-[250px] w-full">
            <div className="rounded-lg">
                <Image maxHeight={maxHeight} shadow={shadow} src={source} width="100%" height="100%"></Image>
            </div>
            {!noText &&
            <div>
                <Spacer height="12px"></Spacer>
                {link ?
                    <Hyperlink hyperlink={link}> <Text underline={!!link} level={3} text={title}></Text> </Hyperlink>
                :
                 <Text underline={!!link} level={3} text={title}></Text>
                }
                
                {hasDescription && <Text level={"p"} text={description}></Text>}
            </div>
            }
        </div>
    )
}

export default ImageText
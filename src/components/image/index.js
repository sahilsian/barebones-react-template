import Image from "next/image"

const Img = ({src, rounded = false, width="100", height="100", shadow, maxHeight, alt}) => {
    return (
        <div>
            <Image 
            className={`${rounded && "rounded-full"} object-cover ${shadow && "good-shadow"} ${maxHeight && `max-h-[${maxHeight}]`}`} src={src} 
            width={width} 
            height={height}
            alt={alt}
            ></Image>
        </div>
    )
}

export default Img
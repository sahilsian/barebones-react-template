const Image = ({src, rounded = false, width="100px", height="100px", shadow, maxHeight}) => {
    return (
        <div>
            <img className={`${rounded && "rounded-full"} object-cover ${shadow && "good-shadow"} ${maxHeight && `max-h-[${maxHeight}]`}`} src={src} width={width} height={height}></img>
        </div>
    )
}

export default Image
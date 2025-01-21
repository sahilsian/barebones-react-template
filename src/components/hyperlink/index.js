import Text from "../text"

const Hyperlink = ({children, hyperlink, hyperlink_text, theme}) => {
    return (
        <span>
            <a href={hyperlink} className={"underline text-white"}>{children}</a>
        </span>
    )
}

export default Hyperlink
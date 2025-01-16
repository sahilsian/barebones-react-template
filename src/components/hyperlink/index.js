const Hyperlink = ({hyperlink, hyperlink_text, theme}) => {
    return (
        <span>
            <a style={{color: theme.colors.hyperlink}} href={hyperlink} className={"underline font-bold"}>{hyperlink_text}</a>
        </span>
    )
}

export default Hyperlink
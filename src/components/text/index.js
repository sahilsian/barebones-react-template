import { useContext } from "react";
import { Context } from "../../utils/context_provider";

const Text = ({level, bold, text, color, align, underline}) => {
    const { theme } = useContext(Context);
    const TextMap = {
        "1": "text-[3rem] md:text-[4.5rem] mb-2 font-[500]",
        "2": "text-[2.2rem] md:text-[3rem] mb-2",
        "3": "text-[1.7rem] md:text-[1.7rem] mb-2",
        "4": "text-[1.4rem]",
        "5": "text-[0.8rem] font-medium md:text-[1rem]  tracking-widest",
        "6": "font-medium text-[0.9rem] opacity-70",
        "p": "text-[1.2rem] mb-2"
    }

    const AlignMap = {
        "center": "text-center",
        "left": "text-left",
        "right": "text-right"
    }

    return (
        <div style={{color: color ? color :  theme.text, fontWeight: bold && "bold"}} className={`NotoSans ${level} ${TextMap[level]} ${AlignMap[align]} ${underline && "underline"}`}>{text}</div>
    )
}

export default Text
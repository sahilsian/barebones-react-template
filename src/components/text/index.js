import { useContext } from "react";
import { Context } from "../../lib/context_provider";

const Text = ({level, bold, text, color, align, underline}) => {
    const { theme } = useContext(Context);
    const TextMap = {
        "1": "font-semibold text-[2rem] mb-2",
        "2": "font-semibold text-[1.7rem] mb-2",
        "3": "font-semibold text-[1.5rem] mb-2",
        "4": "font-semibold text-[1rem]",
        "5": "font-medium text-[0.9rem]",
        "6": "font-medium text-[0.9rem] opacity-70",
        "p": "text-[1rem] mb-2"
    }

    const AlignMap = {
        "center": "text-center",
        "left": "text-left",
        "right": "text-right"
    }

    return (
        <div style={{color: theme.text, fontWeight: bold && "bold"}} className={`${ TextMap[level]} ${AlignMap[align]} ${underline && "underline"}`}>{text}</div>
    )
}

export default Text
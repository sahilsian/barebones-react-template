import { useState } from "react"
import Text from "../text"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import Spacer from "../spacer"

const FAQ = ({title="FAQ", arr=[]}) => {
    const [active, setActive] = useState(0)
    return (
        <div className="mx-auto border-2 p-5 rounded-lg">
            <Text level={3} text={title}></Text>
            {arr.map((item, id) => {
                return (
                    <div key={id} className="py-3">  
                        <div onClick={()=> {
                                setActive(active == id ? null : id)
                            }} className={` text-[22px] py-1 select-none cursor-pointer flex justify-between`}>
                            <div>
                                <Text color={active == id && "#20346f"} level={4} text={item.question}></Text>
                            </div>
                            <div>
                                {active == id ?
                                <FaChevronUp size={20} color={active == id && "#20346f"}></FaChevronUp>
                                :
                                <FaChevronDown size={20}></FaChevronDown>
                                }
                            </div>
                            
                        </div>
                        <div className={`${(active == id ? "block" : "hidden")}`}>
                        <Text level={"p"} text={item.answer}></Text>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FAQ
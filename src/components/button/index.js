const Button = ({status = "primary", disabled, label = "button", onClick=()=>{}, widthFull = false }) => {
    const statusMap = {
        "primary": "bg-[#FFFFFF] hover:opacity-70 border-1 border-[#fdf4dd]",
        "primary_no_outline": "text-white",
        "secondary": "border-[3px] border-white hover:opacity-70 text-white",
        "secondary_inverted": "border-[3px] border-black hover:opacity-70",
        "warning": "bg-[#CCB32F] hover:bg-[#CCB32F90]",
        "danger": "bg-[#CC382F] hover:bg-[#CC382F90] text-white",
        "disabled": "bg-[#C5C5C5]"
    }
    return (
        <div onClick={disabled === false ? onClick : null} className={`${statusMap[status]} font-overused text-[1.2rem] text-center transition-all ${disabled === true ? "cursor-auto" : "cursor-pointer"} font-semibold p-3 px-6 rounded-full w-full ${widthFull ? "w-full" : "max-w-[400px]"}`}>
            {label}
        </div>
    )
}

export default Button
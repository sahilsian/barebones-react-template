import { Socials } from "../../constants/constants"

const SocialRow = ({}) => {
    return (
        <div className="flex items-center gap-2">
            {Socials.map((social) => {
                return (
                    <a href={social.name}>
                        {social.icon}
                    </a>
                )
            })}
        </div>
    )
}

export default SocialRow
import { Socials } from "../../utils/constants/recnroll"

const SocialRow = ({}) => {
    return (
        <div className="flex items-center gap-2">
            {Socials.map((social) => {
                return (
                    <a key={social.name} href={social.name}>
                        {social.icon}
                    </a>
                )
            })}
        </div>
    )
}

export default SocialRow
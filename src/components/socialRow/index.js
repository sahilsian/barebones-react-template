import Link from "next/link"
import { Socials } from "../../utils/constants/recnroll"

const SocialRow = ({}) => {
    return (
        <div className="flex items-center gap-2">
            {Socials.map((social) => {
                return (
                    <Link target="_blank" key={social.name} href={social.name}>
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default SocialRow
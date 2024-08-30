import Link from "next/link"

import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa"

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/tomuthu-engineer/"
    },
    {  
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/tomuthu-engineer/"
    },
    {
        icon: <FaDiscord />,
        path: "https://discordapp.com/users/jmpandi "
    },
    {
        icon: <FaInstagram />,
        path: ""
    }
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path}  className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social
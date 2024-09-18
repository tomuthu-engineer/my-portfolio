import Link from "next/link";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import { FC } from "react";

// Type definition for the socials array
interface SocialItem {
  icon: JSX.Element;
  path: string;
}

// Social media links array with types
const socials: SocialItem[] = [
  {
    icon: <FaGithub />,
    path: "https://github.com/tomuthu-engineer/",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/tomuthu-engineer/",
  },
  {
    icon: <FaDiscord />,
    path: "https://discordapp.com/users/jmpandi",
  },
  {
    icon: <FaInstagram />,
    path: "",
  },
];

// Props type definition for the Social component
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social: FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

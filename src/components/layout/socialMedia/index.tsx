import { Component, ReactElement } from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';

interface Props {
    accounts: {
        facebook: string,
        instagram: string,
        linkedin: string,
        github: string,
    }
}

interface Link {
    to: string,
    name: string,
    icon: ReactElement,
};

class SocialMedia extends Component<Props> {
    render () {
        const accounts = this.props.accounts;
        const links: Link[] = [
            {
                to: accounts.facebook,
                name: 'Facebook',
                icon: <IoLogoFacebook />,
            },
            {
                to: accounts.instagram,
                name: 'Instagram',
                icon: <IoLogoInstagram />,
            },
            {
                to: accounts.linkedin,
                name: 'Linkedin',
                icon: <IoLogoLinkedin />,
            },
            {
                to: accounts.github,
                name: 'Github',
                icon: <IoLogoGithub />,
            },
        ];
        return ( 
            <ul className="socialMediaIcons flex gap-4">
                {links.map((link: Link) => (<li><a href={ link.to } className={`${link.name} bg-mc rounded text-wc center w-8 h-8`}  title={`my ${link.name} account`}  target="_blank">{ link.icon }</a></li>))}
            </ul>
        )
    }
}

export default SocialMedia;
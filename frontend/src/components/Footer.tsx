import { ReactNode } from 'react'
import Section from './smallComponents/Section'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import Button from './smallComponents/Button';
import "../styles/componentStyle/footer.scss";


interface footerLinksProps {
    path: string;
    title: string;
}

interface footerSocialsProps {
    icon: ReactNode;
    path: string;
}

const footerLinks: footerLinksProps[] = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/about",
        title: "About"
    },
    {
        path: "/blog",
        title: "Blog"
    },
    {
        path: "/contact",
        title: "Contact"
    },
]

const footerSocials: footerSocialsProps[] = [
    {
        icon: <FaFacebookF />,
        path: ""
    },
    {
        icon: <FaTwitter />,
        path: ""
    },
    {
        icon: <FaInstagram />,
        path: ""
    },
    {
        icon: <FaLinkedinIn />,
        path: ""
    },
]

const footerLegals: footerLinksProps[] = [
    {
        path: "/privacy-policy",
        title: "Privacy Policy",
    },
    {
        path: "/terms-of-service",
        title: "Terms of Service",
    },
    {
        path: "/cookie-policy",
        title: "Cookie Policy",
    },
]


const Footer = () => {

    const handleBackToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <footer className='footer'>
            <Section className={'footer__section-top'}>
                <Section className={'footer__section footer__links'}>
                    {footerLinks.map((link, i) => (
                        <Link to={link.path} key={i} className='footer__section__item'>
                            {link.title}
                        </Link>
                    ))}
                </Section>
                <Section className={'footer__section footer__socials'}>
                    {footerSocials.map((social, i) => (
                        <Link to={social.path} key={i} className='footer__section__item'>
                            {social.icon}
                        </Link>
                    ))}
                </Section>
                <Section className={'footer__section footer__legals'}>
                    {footerLegals.map((link, i) => (
                        <Link to={link.path} key={i} className='footer__section__item'>
                            {link.title}
                        </Link>
                    ))}
                </Section>
            </Section>
            <Section className='footer__section-bottom'>
                <Section className={'footer__section-bottom__copyright'}>
                    <p className='footer__copyright__title'>© 2025 Blog Platform. All rights reserved.</p>
                </Section>
                <Section className={'footer__section-bottom__back-to-top'}>
                    <Button onClick={handleBackToTop} btnType={'button'} className='footer__section-bottom__back-to-top__btn'>Back to Top</Button>
                </Section>
            </Section>
        </footer>
    )
}

export default Footer
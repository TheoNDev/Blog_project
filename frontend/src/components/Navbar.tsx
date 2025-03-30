import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import "../styles/componentStyle/navbar.scss";
import { useMediaQuery } from "react-responsive";
import { VscClose, VscMenu } from "react-icons/vsc";
import Section from "./smallComponents/Section";
import { GoSearch } from "react-icons/go";
import { useAuth } from "../context/authContext";


interface navLinksProps {
    path: string;
    element: string;
}

const navLinks: navLinksProps[] = [
    {
        path: "/",
        element: "Home",
    },
    {
        path: "/blogs",
        element: "Blogs",
    },
    {
        path: "/categories",
        element: "Categories",
    },
    {
        path: "/create-post",
        element: "Create Post",
    },
    {
        path: "/about",
        element: "About",
    },
]

const Navbar = () => {
    const [isMenuDropped, setIsMenuDropped] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchAnimation, setSearchAnimation] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 500 });
    const { user } = useAuth();


    const handleShowSearch = () => {
        setSearchAnimation(true)
        setIsSearchOpen(true)
    }
    const handleHideSearch = () => {
        setSearchAnimation(false)

        setTimeout(() => setIsSearchOpen(false), 250);
    }


    return (

        <nav className="nav" >
            <p className="nav__title">Blog</p>
            <Section className="nav__right">
                {!isMobile ? (
                    <Section className="nav__right__links">
                        {navLinks.map((link, i) => (
                            <Link to={link.path} key={i} className="nav__right__links__item">
                                {link.element}
                            </Link>
                        ))}
                    </Section>
                ) : (
                    <></>
                )}
                {!isSearchOpen ? (
                    <GoSearch className="nav__right__icon" onClick={() => handleShowSearch()} />
                ) : (
                    <Section className="nav__right__search">
                        <input type="search" placeholder="Search Posts..." className={`nav__right__search__input ${searchAnimation ? ("show") : ("hide")} `} />
                        <VscClose className="nav__right__search__icon" onClick={() => handleHideSearch()} />
                    </Section>
                )}
                <IoIosNotificationsOutline className="nav__right__icon" />
                {user ? (
                    <Link to={"/profile"} className="nav__right__profile">
                        <img src={user.profileImg ? (user.profileImg) : ("/images/defaultProfileImg.png")} alt="" className="nav__right__profile__img" />
                    </Link>
                ) : (
                    <Link to={"/login"}>
                        <CiUser className="nav__right__icon" />
                    </Link>

                )}
                {isMobile ? (
                    <>
                        {!isMenuDropped ? (
                            <VscMenu onClick={() => setIsMenuDropped(true)} className="nav__right__icon" />
                        ) : (
                            <VscClose onClick={() => setIsMenuDropped(false)} className="nav__right__icon" />
                        )}
                        <Section className={`nav__right__links ${!isMenuDropped ? "hidden" : "active"}`}>
                            {navLinks.map((link, i) => (
                                <Link to={link.path} key={i} className="nav__right__links__item">
                                    {link.element}
                                </Link>
                            ))}


                        </Section>
                    </>
                ) : (<></>)}
            </Section>
        </nav>
    )
}

export default Navbar
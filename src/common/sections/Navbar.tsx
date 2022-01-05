import React, { useState } from 'react'
import { Link } from "react-scroll";

import LogoImage from 'assets/images/common/logo.svg'
import TwitterIcon from 'assets/images/common/twitter.svg'
import InstagramIcon from 'assets/images/common/instagram.svg'
import DiscordIcon from 'assets/images/common/discord.svg'

import 'assets/styles/sections/navbar.scss'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
            document.body.classList.remove('no-scroll');
        } else {
            setIsMenuOpen(true)
            document.body.classList.add('no-scroll');
        }
    }

    const closeMenuOnLink = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
            document.body.classList.remove('no-scroll');
        }
    }

    return (
        <div className="navbar">
            <div className="navbar__container container">
                <div className="navbar__content">
                    <img src={LogoImage} alt="" className="navbar__logo" />
                    <div className={`navbar__links-wrapper ${isMenuOpen?'active':''}`}>
                        <Link to="project" className="navbar__link" smooth={true} duration={500} onClick={()=>closeMenuOnLink()}>
                            Story
                        </Link>
                        <Link to="collection" className="navbar__link" smooth={true} duration={1000} onClick={()=>closeMenuOnLink()}>
                            Collection
                        </Link>
                        <Link to="specification" className="navbar__link" smooth={true} duration={1200} onClick={()=>closeMenuOnLink()}>
                            Specification
                        </Link>
                        <Link to="lineages" className="navbar__link" smooth={true} duration={1400} onClick={()=>closeMenuOnLink()}>
                            Lineages
                        </Link>
                        <Link to="metaverse" className="navbar__link" smooth={true} duration={1600} onClick={()=>closeMenuOnLink()}>
                            MetaVerse
                        </Link>
                        <Link to="roadmap" className="navbar__link" smooth={true} duration={1800} onClick={()=>closeMenuOnLink()}>
                            Roadmap
                        </Link>
                        <Link to="FAQ" className="navbar__link" smooth={true} duration={2000} onClick={()=>closeMenuOnLink()}>
                            FAQ
                        </Link>
                        <a href="https://blog.riseofrhelegus.com/" className="navbar__link" onClick={()=>closeMenuOnLink()}>
                            Blog
                        </a>
                        <a href="https://game.riseofrhelegus.com/" className="navbar__link" onClick={()=>closeMenuOnLink()}>
                            Game
                        </a>
                    </div>
                    <div className="navbar__socials-wrapper">
                        <a href="https://twitter.com/rhelegus" target="_blank" rel="noreferrer" className="navbar__social-link">
                            <img src={TwitterIcon} alt="" className="navbar__social-icon" />
                        </a>
                        <a href="https://www.instagram.com/riseofrhelegus/" target="_blank" rel="noreferrer" className="navbar__social-link">
                            <img src={InstagramIcon} alt="" className="navbar__social-icon" />
                        </a>
                        <a href="https://discord.link/ROR" target="_blank" rel="noreferrer" className="navbar__social-link">
                            <img src={DiscordIcon} alt="" className="navbar__social-icon" />
                        </a>
                    </div>
                    <button className={`navbar__menuButton ${isMenuOpen?'active':''}`} type="button" onClick={()=>handleToggleMenu()}>
                        <span className="navbar__menuButton-item"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

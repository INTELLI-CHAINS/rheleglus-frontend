import React from 'react'
import { Link } from "react-scroll";

import LogoImage from 'assets/images/common/logo.svg'
import TwitterIcon from 'assets/images/common/twitter.svg'
import InstagramIcon from 'assets/images/common/instagram.svg'
import DiscordIcon from 'assets/images/common/discord.svg'

import 'assets/styles/sections/footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__content-wrapper">
                    <div className="footer__content">
                        <img src={LogoImage} alt="" className="footer__logo" />
                        <p className="footer__text">
                            "If war is madness then Rhelegus is living in the apocalypse" - The True Gods of Xorbin. 7777 Programmatically Generated Unique NFTs waiting to be awaken on the ETH Blockchain.
                        </p>
                        <div className="footer__socials">
                            <a href="https://twitter.com/rhelegus" target="_blank" rel="noreferrer" className="footer__socialLink">
                                <img src={TwitterIcon} alt="" className="footer__socialLink-icon" />
                            </a>
                            <a href="https://www.instagram.com/riseofrhelegus/" target="_blank" rel="noreferrer" className="footer__socialLink">
                                <img src={InstagramIcon} alt="" className="footer__socialLink-icon" />
                            </a>
                            <a href="https://discord.link/ROR" target="_blank" rel="noreferrer" className="footer__socialLink">
                                <img src={DiscordIcon} alt="" className="footer__socialLink-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__links-wrapper">
                        <div className="footer__links">
                            <h4 className="footer__links-heading">
                                SITE MENU
                            </h4>
                            <Link to="hero" className="footer__link" smooth={true} duration={2000}>
                                Home
                            </Link>
                            <Link to="project" className="footer__link" smooth={true} duration={1800}>
                                Story
                            </Link>
                            <Link to="collection" className="footer__link" smooth={true} duration={1600}>
                                Collection
                            </Link>
                            <Link to="specification" className="footer__link" smooth={true} duration={1400}>
                                Specification
                            </Link>
                            <Link to="lineages" className="footer__link" smooth={true} duration={1200}>
                                Lineages
                            </Link>
                            <Link to="metaverse" className="footer__link" smooth={true} duration={1000}>
                                MetaVerse
                            </Link>
                        </div>
                        <div className="footer__links">
                            <h4 className="footer__links-heading">
                                Useful Links
                            </h4>
                            <Link to="participate" className="footer__link" smooth={true} duration={1500}>
                                Why participate
                            </Link>
                            <Link to="gallery" className="footer__link" smooth={true} duration={1400}>
                                Gallery
                            </Link>
                            <Link to="roadmap" className="footer__link" smooth={true} duration={1200}>
                                Roadmap
                            </Link>
                            <Link to="ourTeam" className="footer__link" smooth={true} duration={600}>
                                Our Team
                            </Link>
                            <a href="https://blog.riseofrhelegus.com/" className="footer__link" >
                                Blog
                            </a>
                            <a href="https://game.riseofrhelegus.com/" className="footer__link" >
                                Game
                            </a>
                        </div>
                        <div className="footer__links">
                            <h4 className="footer__links-heading">
                                Information
                            </h4>
                            <Link to="FAQ" className="footer__link" smooth={true} duration={600}>
                                FAQ
                            </Link>
                            <Link to="#" className="footer__link" smooth={true} duration={1500}>
                                Privacy policy
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer__rights">
                    <div className="footer__rights-content">
                        2021 - Developed by <span>Rhelegus Team</span>
                    </div>
                    <div className="footer__rights-content">
                        All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

import Collection from 'common/sections/Collection';
import FAQ from 'common/sections/FAQ';
import Footer from 'common/sections/Footer';
import Gallery from 'common/sections/Gallery';
import Hero from 'common/sections/Hero';
import Lineages from 'common/sections/Lineages';
import Metaverse from 'common/sections/Metaverse';
import Navbar from 'common/sections/Navbar';
import OurTeam from 'common/sections/OurTeam';
import Participate from 'common/sections/Participate';
import Project from 'common/sections/Project';
import ProjectVideo from 'common/sections/ProjectVideo';
import Roadmap from 'common/sections/Roadmap';
import Specification from 'common/sections/Specification';
import Subscribe from 'common/sections/Subscribe';
import React from 'react'

const Landing = () => {
    return (
        <div>
            <Navbar />

            <Hero />

            <Project />

            <ProjectVideo />

            <Collection />

            <Specification />

            <Lineages />

            <Metaverse />

            <Participate />

            <Gallery />

            <Roadmap />

            <FAQ />

            <OurTeam />

            <Subscribe />

            <Footer />
        </div>
    )
}

export default Landing;

import React from 'react';

import DiscordIcon from 'assets/images/common/discord.svg'
import DiscordWords from 'assets/images/common/discord-words.svg'

import Collection from 'common/sections/Collection';
import FAQ from 'common/sections/FAQ';
import Hero from 'common/sections/Hero';
import Lineages from 'common/sections/Lineages';
import Metaverse from 'common/sections/Metaverse';
import OurTeam from 'common/sections/OurTeam';
import Participate from 'common/sections/Participate';
import Project from 'common/sections/Project';
import ProjectVideo from 'common/sections/ProjectVideo';
import Roadmap from 'common/sections/Roadmap';
import Specification from 'common/sections/Specification';
import Subscribe from 'common/sections/Subscribe';
import Navbar from 'common/sections/Navbar';
import Gallery from 'common/sections/Gallery';
import Footer from 'common/sections/Footer';
import CookieBanner from 'common/components/cookiebanner';

function App() {
   return (
      <div className="app">
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

         <CookieBanner />

         <a href="https://discord.link/ROR" target="_blank" rel="noreferrer" className="discord-link">
            <img src={DiscordWords} alt="" className="discord-link__words" />
            <img src={DiscordIcon} alt="" className="discord-link__icon" />
         </a>
      </div>
   );
}

export default App;

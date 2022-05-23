import React from "react";

import ProjectParameter from "common/components/project/ProjectParameter";

import CharImage from "assets/images/project/1.png";
import "assets/styles/sections/project.scss";

const Project = () => {
  return (
    <section className="project" id="project">
      <div className="project__container container">
        <div className="project__content row">
          <div className="project__text-block col-md-5 col-lg-6">
            <div className="project__text-content">
              <h2 className="project__title">Project Rhelegus</h2>
              <div className="project__text">
                “If war is madness then Rhelegus is living in the apocalypse” —
                The True God of Xorbin. 7777 Programmatically generated unique
                NFTs waiting to be awakened on the ETH Blockchain.
              </div>
              <div className="project__lead">
                <div className="project__lead-text">All priced at</div>
                <div className="project__lead-prices">ETH 0.066</div>
              </div>
            </div>
          </div>
          <div className="project__image-block d-none d-md-block col-md-7 col-lg-6">
            <div className="project__image-wrapper">
              <img src={CharImage} alt="" className="project__image" />
            </div>
          </div>
        </div>
        <div className="project__parameters-wrapper">
          <div className="project__parameters parametersProject">
            <ProjectParameter value="7777" heading="Total Supply" />
            <ProjectParameter value="200+" heading="Handdrawn Attributes" />
            <ProjectParameter value="30" heading="Body Types" />
            <ProjectParameter value="0.066 ETH" heading="Initial Price" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

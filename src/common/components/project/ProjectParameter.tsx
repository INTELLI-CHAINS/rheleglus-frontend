import React from 'react'

import 'assets/styles/components/project/ProjectParameter.scss'

interface IProjectParameterProps {
    value   : string,
    heading : string
}

const ProjectParameter = ({ value, heading } : IProjectParameterProps) => {
    return (
        <div className="projectParameter__item-wrapper">
            <div className="projectParameter__item">
                <h3 className="projectParameter__value">
                    {value}
                </h3>
                <h5 className="projectParameter__heading">
                    {heading}
                </h5>
            </div>
        </div>
    )
}

export default ProjectParameter

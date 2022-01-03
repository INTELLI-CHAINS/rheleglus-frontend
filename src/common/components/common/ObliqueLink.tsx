import React from 'react'

import 'assets/styles/components/common/obliqueLink.scss'

interface IObliqueLinkProps {
    text: string,
    linkTo: string,
}

const ObliqueLink = ({ text, linkTo }: IObliqueLinkProps) => {
    return (
        <div className="obliqueLink-wrapper">
            <a href={linkTo} className="obliqueLink">
                {text}
            </a>
        </div>
    )
}

export default ObliqueLink

import React from 'react'

interface IObliqueButtonProps {
    text: string,
    onClick: Function,
}

const ObliqueButton = ({ text, onClick } : IObliqueButtonProps) => {
    return (
        <div className="obliqueLink-wrapper">
            <button className="obliqueLink" onClick={() => onClick()}>
                {text}
            </button>
        </div>
    )
}

export default ObliqueButton

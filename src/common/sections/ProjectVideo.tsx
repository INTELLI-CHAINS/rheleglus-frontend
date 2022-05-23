import React, { useState } from 'react'

import PlayIcon from 'assets/images/common/play.svg';
import 'assets/styles/sections/projectVideo.scss'

const ProjectVideo = () => {
    const [paused, setPaused] = useState(true)
    const [videoURL, setVideoURL] = useState('')

    const startVideo = () => {
        setVideoURL('https://player.vimeo.com/video/642587658?h=97f588e169&autoplay=1&color=e50914&title=0&byline=0&portrait=0')
        setPaused(false)
    }

    return (
        <section className={`projectVideo ${!paused ? 'loaded' : ''}`}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe src={videoURL}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0" allowFullScreen
                    allow="autoplay; fullscreen; picture-in-picture"
                    title='Rise of Rhelegus'
                >
                </iframe>
            </div>
            <button
                className={`projectVideo__play-button ${paused ? 'visible' : ''}`}
                type='button' onClick={() => startVideo()}>
                <img src={PlayIcon} alt="" className="projectVideo__play-icon" />
            </button>
        </section>
    )
}

export default ProjectVideo

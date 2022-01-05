import React from 'react'

import PanelFAQ from 'admin/sections/PanelFAQ'

import 'assets/styles/panel.scss'
import PanelTeam from 'admin/sections/PanelTeam'
import PanelSpecification from 'admin/sections/PanelSpecification'
import PanelLineages from 'admin/sections/PanelLineages'
import PanelMetaverse from 'admin/sections/PanelMetaverse'
import PanelParticipate from 'admin/sections/PanelParticipate'
import Roadmap from 'common/sections/Roadmap'
import PanelRoadmap from 'admin/sections/PanelRoadmap'

const AdminPanel = () => {

    return (
        <div className="panel">
            <h1 className="panel__main-title">
                My Admin Panel
            </h1>
            <PanelSpecification />
            <PanelFAQ />
            <PanelLineages />
            <PanelMetaverse />
            <PanelParticipate />
            <PanelRoadmap />
            <PanelTeam />
            {/* <PanelGetSet />
            <PanelCompleted />
            <PanelFeatures />
            <PanelObjectives />
            <PanelTeam /> */}
        </div>
    )
}

export default AdminPanel

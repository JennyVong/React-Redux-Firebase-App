import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Someone Anybody</p>
                    <p className="grey-text">September 3 2019 at 2:05 am</p>
                </div>
            </div>
    )
}

export default ProjectSummary
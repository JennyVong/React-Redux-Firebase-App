import React from 'react'
import { connect } from 'react-redux'
import {firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
    return (
       <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <div className="card-title">{project.title}</div>
                   <p>{project.content}</p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
                   <div>September 3 2019 at 2:30 am</div>
               </div>
           </div>
       </div>
    ) 
}
else {
    return (
        <div className="container center">
            <p>Loading Project...</p>
        </div>
    )
}
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.project
    const project = projects ? projects[id] : null
    return {
       project: project 
    }
}

export default compose (
    connect (mapStateToProps),
    firestoreConnect ([
        { collection: 'project'}
    ])
)(ProjectDetails)


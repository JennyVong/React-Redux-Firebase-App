export const createProject = (project) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        //make async call to database
        const firestore = getFirestore ();
        firestore.collection('project').add({
            ...project,
            authorFirstName: 'Anonymous',
            authorLastName: 'Writer',
            createdAt: new Date()
        }).then (() => {
            dispatch({ type: 'CREATE_PROJECT' , project: project });
        }).catch ((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};
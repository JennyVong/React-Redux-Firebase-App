const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        firebase.logout().then (() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        }).catch ((err) => {
            dispatch({ type: 'SIGNOUT_ERROR', err});
        });
    }
}

export default signOut
const signUpAction = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase ();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword (
            newUser.email,
            newUser.password
        ).then ((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                FirstName: newUser.FirstName,
                LastName: newUser.LastName,
                initials: newUser.FirstName[0] + newUser.LastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
            dispatch ({ type: 'SIGNUP_ERROR', err });
        })
    }
}

export default signUpAction
import authReducer from './authreducer';
import ProjectReducer from './projectreducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'

const RootReducer = combineReducers ({
    auth: authReducer,
    project: ProjectReducer,
    firestore: firestoreReducer
});

export default RootReducer
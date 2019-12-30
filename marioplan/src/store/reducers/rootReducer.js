import authReducer from './authreducer';
import ProjectReducer from './projectreducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers ({
    auth: authReducer,
    project: ProjectReducer
});

export default RootReducer
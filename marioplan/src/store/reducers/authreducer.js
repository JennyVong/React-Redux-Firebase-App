const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('Login error');
        return {
            ...state,
            authError: 'Login Failed'
        }
        case 'LOGIN_SUCCESS':
            console.log('login success');
        return {
            ...state,
            authError: null
        }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('signout error');
            return {
                state,
                authError: 'logout error'
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
            ...state,
            authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import signUpAction from '../../store/actions/signupaction'

export class signup extends Component {
    state ={
        email: '',
        password: '',
        FirstName: '',
        LastName: ''
    }
    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUpAction(this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to = '/' />
        return (
            <div className = "container">
                <form onSubmit = {this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="FirstName">First Name</label>
                    <input type="text" id="FirstName" onChange = {this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" id="LastName" onChange = {this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange = {this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange = {this.handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
                <div className="red-text center">
                    { authError ? <p>{ authError }</p> : null }
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpAction: (newUser) => dispatch(signUpAction(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signup)
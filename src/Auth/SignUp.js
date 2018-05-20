import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton} from 'material-ui'
import {signUpEmail, signUpPassword, signUpRetypePassword, onSignUpClick} from "../state/formsState";


const SignUp = (props) => (
    <div>

        <TextField
            name={"email"}
            placeholder={'E-mail'}
            type={"email"}
            onChange={props.signUpEmail}
        />
        <TextField
            name={"password"}
            placeholder={'Password'}
            type={"password"}
            onChange={props.signUpPassword}
        />
        <TextField
            name={"retypePassword"}
            placeholder={'Retype password'}
            type={"password"}
            onChange={props.signUpRetypePassword}
        />
        <RaisedButton
            primary={true}
            onClick={() => props.onSignUpClick}
            label={"Sign Up"}
        />
    </div>
)
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    signUpEmail: (ev, newValue) => dispatch(signUpEmail(newValue)),
    signUpPassword: (ev, newValue) => dispatch(signUpPassword(newValue)),
    signUpRetypePassword: (ev, newValue) => dispatch(signUpRetypePassword(newValue)),
    onSignUpClick: () => dispatch(onSignUpClick()),



})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)
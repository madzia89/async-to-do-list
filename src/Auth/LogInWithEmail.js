import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton} from 'material-ui'
import {logInEmail, logInPassword, logInWithEmail} from "../state/formsState";


const LogInWithEmail = (props) => (
    <div>

        <TextField
            name={"email"}
            placeholder={'E-mail'}
            type={"email"}
            onChange={props.logInEmail}
        />
        <TextField
            name={"password"}
            placeholder={'Password'}
            type={"password"}
            onChange={props.logInPassword}
        />
        <RaisedButton
            primary={true}
            onClick={() => props.logInWithEmail}
            label={"Log in"}
        />
    </div>
)
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    logInEmail: (ev, newValue) => dispatch(logInEmail(newValue)),
    logInPassword: (ev, newValue) => dispatch(logInPassword(newValue)),
    logInWithEmail: () => dispatch(logInWithEmail()),


})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInWithEmail)
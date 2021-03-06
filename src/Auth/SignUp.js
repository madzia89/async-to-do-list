import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton} from 'material-ui'
import {signUpEmail, signUpPassword, signUpRetypePassword, onSignUpClick} from "../state/formsState";
import {Row} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'


const SignUp = (props) => (
    <div>
        <Paper style={{margin: '25px', padding: '25px'}}>
            <Row center={'xs'}>
                <h2 style={{color: 'darkslategray'}}>...or sign up!</h2>
            </Row>
            <Row center={'xs'}>
                <TextField
                    name={"email"}
                    placeholder={'E-mail'}
                    type={"email"}
                    onChange={props.signUpEmail}
                    onKeyPress={(ev) => {
                        if ((ev.key === 'Enter') && (props.newText !== '')) {
                            props.onSignUpClick()
                        }
                    }
                    }
                />
            </Row>
            <Row center={'xs'}>
                <TextField
                    name={"password"}
                    placeholder={'Password'}
                    type={"password"}
                    onChange={props.signUpPassword}
                    onKeyPress={(ev) => {
                        if ((ev.key === 'Enter') && (props.newText !== '')) {
                            props.onSignUpClick()
                        }
                    }}
                />
            </Row>
            <Row center={'xs'}>
                <TextField
                    name={"retypePassword"}
                    placeholder={'Retype password'}
                    type={"password"}
                    onChange={props.signUpRetypePassword}
                    onKeyPress={(ev) => {
                        if ((ev.key === 'Enter') && (props.newText !== '')) {
                            props.onSignUpClick()
                        }
                    }}
                />
            </Row>
            <Row center={'xs'}>
                <RaisedButton
                    primary={true}
                    onClick={() => props.onSignUpClick()}
                    label={"Sign Up"}
                />
            </Row>
        </Paper>
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
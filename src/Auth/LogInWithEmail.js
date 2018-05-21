import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton} from 'material-ui'
import {logInEmail, logInPassword, logInWithEmail} from "../state/formsState";
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper'


const LogInWithEmail = (props) => (
    <div>
        <Paper style={{margin: '25px', padding: '25px'}}>

            <Row center={'xs'}>
                <h2>or log in with email...</h2>
            </Row>
            <Row center={'xs'}>
                <TextField
                    name={"email"}
                    placeholder={'E-mail'}
                    type={"email"}
                    onChange={props.logInEmail}
                />
            </Row>
            <Row center={'xs'}>
                <TextField
                    name={"password"}
                    placeholder={'Password'}
                    type={"password"}
                    onChange={props.logInPassword}
                />
            </Row>
            <Row center={'xs'}>
                <RaisedButton
                    primary={true}
                    onClick={() => props.logInWithEmail()}
                    label={"Log in"}
                />
            </Row>
        </Paper>
    </div>
)
const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    logInEmail: (ev, newValue) => dispatch(logInEmail(newValue)),
    logInPassword: (ev, newValue) => dispatch(logInPassword(newValue)),
    logInWithEmail: () => dispatch(logInWithEmail()),


})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInWithEmail)
import React from 'react'
import {connect} from 'react-redux'
import {logInByGoogle} from '../state/auth'
import LogInByGoogle from "./LogInByGoogle"
import SignUp from './SignUp'
import LogInWithEmail from './LogInWithEmail'
import AppBar from 'material-ui/AppBar'


const Auth = (props) => (
    <div>
        {
            props.isUserLoggedIn ?
                props.children
                :
                <div>
                    <AppBar title="Home"
                            showMenuIconButton={false}
                            style={{backgroundColor: '#AD1457'}}/>
                    <div>
                        <LogInByGoogle
                            onLogInHandler={props.logInByGoogle}
                        />
                        <LogInWithEmail/>
                        <SignUp/>
                    </div>
                </div>
        }
    </div>
)

const mapStateToProps = state => ({
    isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle()),

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)
import React from 'react'
import {connect} from 'react-redux'
import {logInByGoogle} from '../state/auth' //odpowiada za logowanie googlem
import LogInByGoogle from "./LogInByGoogle"
import SignUp from './SignUp'
import LogInWithEmail from './LogInWithEmail'


const Auth = (props) => (
    <div>
        {
            props.isUserLoggedIn ?
                props.children
                :
                <div>
                    <LogInByGoogle
                        onLogInHandler={props.logInByGoogle}
                    />
                    <LogInWithEmail/>
                    <SignUp/>
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